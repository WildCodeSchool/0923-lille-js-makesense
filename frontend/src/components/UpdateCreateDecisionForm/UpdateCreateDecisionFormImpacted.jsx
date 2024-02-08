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
  // list impacted users
  const [filteredUsers, setFilteredUsers] = useState([]);
  const impactedRef = useRef();

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

  // Add an impacted to the filtered users
  const handleAddUser = () => {
    // Search for the user corresponding the input
    const newFilteredUser = users.find(
      (user) =>
        `${user.firstname} ${user.lastname} (${user.email})` ===
        impactedRef.current.value
    );
    // if there's a corresponding user, add it to the list
    if (newFilteredUser) {
      setFilteredUsers((prevFilteredUsers) => [
        ...prevFilteredUsers,
        newFilteredUser,
      ]);
    }
  };

  // Wait for the newFiltteredUser to be added before updating the filteredUsers state
  useEffect(() => {
    // update the impacted list sent to the parent
    setUpdateDecisionFormImpacted(filteredUsers);
    // Clear input after validation
    setSearchUser("");
  }, [filteredUsers]);

  // Remove an impacted from the filtered list
  const handleRemoveUser = (userId) => {
    setFilteredUsers((prevFilteredUsers) =>
      prevFilteredUsers.filter((user) => user.user_id !== userId)
    );
    // update the list sent to the parent
    setUpdateDecisionFormImpacted(filteredUsers);
  };

  return (
    <article className="updateDecisionForm__experts">
      <h2 className="updateDecisionForm__titles">Impacté·e·s</h2>
      <span className="updateDecisionForm__content updateDecisionForm__content--choiceBoxes">
        <ul className="updateDecisionForm__list">
          {updateImpacted.map((user) => (
            <li key={user.user_id} className="updateDecisionForm__chosen">
              <img
                src={`${import.meta.env.VITE_BACKEND_URL}/uploads/${
                  user.picture
                }`}
                alt={`avatar de ${user.firstname} ${user.lastname}`}
                className="updateDecisionForm__chosen--avatar"
              />
              <p className="updateDecisionForm__chosen--fullname">
                {user.firstname} {user.lastname}
              </p>
            </li>
          ))}
          {filteredUsers.map((user) => (
            <li key={user.user_id} className="updateDecisionForm__chosen">
              <img
                src={`${import.meta.env.VITE_BACKEND_URL}/uploads/${
                  user.picture
                }`}
                alt={`avatar de ${user.firstname} ${user.lastname}`}
                className="updateDecisionForm__chosen--avatar"
              />
              <p className="updateDecisionForm__chosen--fullname">
                {user.firstname} {user.lastname}
                <button
                  type="button"
                  className="updateDecisionForm__chosen--remove"
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
            className="updateDecisionForm__input"
            type="text"
            placeholder="Rechercher impacté·e·s"
            value={searchUser}
            onChange={handleInputChange}
            list="usersList"
            ref={impactedRef}
          />
          <datalist id="usersList">
            {users.map((user) => (
              <option
                className="updateDecisionForm__search--options"
                key={user.user_id}
                aria-label="Noms"
                value={`${user.firstname} ${user.lastname} (${user.email})`}
              />
            ))}
          </datalist>
          <button
            className="updateDecisionForm__submit"
            type="button"
            onClick={handleAddUser}
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
