import "./EditDecisionForm.scss";
import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

function CreateDecisionFormImpacted({ setCreateDecisionFormImpacted }) {
  // liste de tous les users
  const [users, setUsers] = useState([]);
  // recherche des users dans l'input
  const [searchUser, setSearchUser] = useState("");
  // liste des users impactés
  const [filteredUsers, setFilteredUsers] = useState([]);
  const expertRef = useRef();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/user`)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .then()
      .catch((error) => console.error("Error fetching user data", error));
  }, []);

  const handleInputChange = (e) => {
    // Lis les inputs clavier pour créer un auto-complete basé sur [users]
    setSearchUser(e.target.value);
  };

  // Ajoute un expert à la liste filtrée
  const handleClick = () => {
    // cherche le user qui correspond à l'input
    const newFilteredUser = users.find(
      (user) =>
        `${user.firstname} ${user.lastname} (${user.email})` ===
        expertRef.current.value
    );
    // si le user correspond, ajoute le user aux users filtrés
    if (newFilteredUser) {
      setFilteredUsers((prevFilteredUsers) => [
        ...prevFilteredUsers,
        newFilteredUser,
      ]);
      // met à jour la liste des impactés envoyés au parent
      setCreateDecisionFormImpacted(filteredUsers);
      // Vide l'input après validation
      setSearchUser("");
    }
  };

  // Enlève un expert de la liste filtrée
  const handleRemoveUser = (userId) => {
    setFilteredUsers((prevFilteredUsers) =>
      prevFilteredUsers.filter((user) => user.user_id !== userId)
    );
    // met à jour la liste des impactés envoyés au parent
    setCreateDecisionFormImpacted(filteredUsers);
  };

  return (
    <article className="createDecisionForm__impacted">
      <h2 className="createDecisionForm__titles">Impacté·e·s</h2>
      <span className="createDecisionForm__content createDecisionForm__content--choiceBoxes">
        <ul className="createDecisionForm__list">
          {filteredUsers.map((user) => (
            <li key={user.user_id} className="createDecisionForm__chosen">
              <img
                src={user.picture}
                alt={`avatar de ${user.firstname} ${user.lastname}`}
                className="createDecisionForm__chosen--avatar"
              />
              <p className="createDecisionForm__chosen--fullname">
                {user.firstname} {user.lastname}
                <button
                  type="button"
                  className="createDecisionForm__chosen--remove"
                  onClick={() => handleRemoveUser(user.user_id)}
                >
                  -
                </button>
              </p>
            </li>
          ))}
        </ul>
        <section className="createDecisionForm__search">
          <input
            className="createDecisionForm__input"
            type="text"
            placeholder="Rechercher expert·e·s"
            value={searchUser}
            onChange={handleInputChange}
            list="users-list"
            ref={expertRef}
          />
          <datalist id="users-list">
            {users.map((user) => (
              <option
                key={user.user_id}
                aria-label="Noms"
                value={`${user.firstname} ${user.lastname} (${user.email})`}
              />
            ))}
          </datalist>
          <button
            className="createDecisionForm__submit"
            type="button"
            onClick={handleClick}
          >
            Choisir
          </button>
        </section>
      </span>
    </article>
  );
}

CreateDecisionFormImpacted.propTypes = {
  setCreateDecisionFormImpacted: PropTypes.func.isRequired,
};

export default CreateDecisionFormImpacted;
