import "./UpdateCreateDecisionForm.scss";
import { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import { useDecisionContext } from "../../contexts/decisionContext";

function UpdateDecisionFormImpacted({ setUpdateDecisionFormImpacted }) {
  const { decisionId } = useDecisionContext();

  const [updateImpacted, setUpdateImpacted] = useState([]);

  // List all users
  const [users, setUsers] = useState([]);
  // search users in input
  const [searchUser, setSearchUser] = useState("");
  // list expert users
  const [filteredUsers, setFilteredUsers] = useState([]);
  const expertRef = useRef();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/user`)
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching user data", error));
  }, []);

  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/decisions/${decisionId}/impacted`
    )
      .then((response) => response.json())
      .then((data) => setUpdateImpacted(data))
      .catch((error) => console.error(error));
  }, [decisionId]);

  const handleInputChange = (e) => {
    // read keyboard inputs to autocomplete based on users
    setSearchUser(e.target.value);
  };

  // Add an expert to the filtered users
  const handleClick = () => {
    // Search for the user corresponding the input
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
      // update the expert list sent to the parent
      setUpdateDecisionFormImpacted(filteredUsers);
      // Clear input after validation
      setSearchUser("");
    }
  };

  // Remove an expert from the filtered list
  const handleRemoveUser = (userId) => {
    setFilteredUsers((prevFilteredUsers) =>
      prevFilteredUsers.filter((user) => user.user_id !== userId)
    );
    // update the expert list sent to the parent
    setUpdateDecisionFormImpacted(filteredUsers);
  };

  return (
    <article className="updateDecisionForm__experts">
      <h2 className="updateDecisionForm__titles">Expert·e·s</h2>
      <span className="updateDecisionForm__content updateDecisionForm__content--choiceBoxes">
        <ul className="updateDecisionForm__list">
          {updateImpacted.map((user) => (
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
        <section className="updateDecisionForm__search">
          <input
            className="createDecisionForm__input"
            type="text"
            placeholder="Rechercher expert·e·s"
            value={searchUser}
            onChange={handleInputChange}
            list="usersList"
            ref={expertRef}
          />
          <datalist id="usersList">
            {users.map((user) => (
              <option
                className="createDecisionForm__search--options"
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

UpdateDecisionFormImpacted.propTypes = {
  setUpdateDecisionFormImpacted: PropTypes.func.isRequired,
};

export default UpdateDecisionFormImpacted;
