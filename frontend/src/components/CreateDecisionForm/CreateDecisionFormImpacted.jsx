import "./CreateDecisionForm.scss";
import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

function CreateDecisionFormImpacted({ setCreateDecisionFormImpacted }) {
  // List all users
  const [users, setUsers] = useState([]);
  // search users in input
  const [searchUser, setSearchUser] = useState("");
  // list impacted users
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
    // Read keyboard inputs to autocomplete based on user
    setSearchUser(e.target.value);
  };

  // Add an impacted to the filtered users
  const handleClick = () => {
    // search for the user corresponding the input
    const newFilteredUser = users.find(
      (user) =>
        `${user.firstname} ${user.lastname} (${user.email})` ===
        expertRef.current.value
    );
    // if there's a corresponding user, add it to the list
    if (newFilteredUser) {
      setFilteredUsers((prevFilteredUsers) => [
        ...prevFilteredUsers,
        newFilteredUser,
      ]);
      // update the impacted list sent to the parent
      setCreateDecisionFormImpacted(filteredUsers);
      // Clear the input after validation
      setSearchUser("");
    }
  };

  // Remove a user from the filtered user list
  const handleRemoveUser = (userId) => {
    setFilteredUsers((prevFilteredUsers) =>
      prevFilteredUsers.filter((user) => user.user_id !== userId)
    );
    // update the list sent to the parent
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
