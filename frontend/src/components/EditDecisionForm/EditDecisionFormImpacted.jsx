import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import { useDecisionContext } from "../../contexts/decisionContext";
import "./EditDecisionForm.scss";

function EditDecisionFormImpacted({ setEditDecisionFormImpacted }) {
  const { decisionId } = useDecisionContext();

  const [editImpacted, setEditImpacted] = useState([]);

  // List all users
  const [users, setUsers] = useState([]);
  // Search users in input
  const [searchUser, setSearchUser] = useState("");
  // List expert users
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
      .then((data) => setEditImpacted(data))
      .catch((error) => console.error(error));
  }, [decisionId]);

  const handleInputChange = (e) => {
    // Read keyboard inputs to autocomplete based on users
    setSearchUser(e.target.value);
  };

  // Add an expert to the filtered users
  const handleClick = () => {
    // Search for the user corresponding to the input
    const newFilteredUser = users.find(
      (user) =>
        `${user.firstname} ${user.lastname} (${user.email})` ===
        expertRef.current.value
    );
    // If there's a corresponding user, add it to the list
    if (newFilteredUser) {
      setFilteredUsers((prevFilteredUsers) => [
        ...prevFilteredUsers,
        newFilteredUser,
      ]);
      // Update the expert list sent to the parent
      setEditDecisionFormImpacted(filteredUsers);
      // Clear input after validation
      setSearchUser("");
    }
  };

  // Remove an expert from the filtered list
  const handleRemoveUser = (userId) => {
    setFilteredUsers((prevFilteredUsers) =>
      prevFilteredUsers.filter((user) => user.user_id !== userId)
    );
    // Update the expert list sent to the parent
    setEditDecisionFormImpacted(filteredUsers);
  };

  return (
    <article className="editDecisionForm__experts">
      <h2 className="editDecisionForm__titles">Expert·e·s</h2>
      <span className="editDecisionForm__content editDecisionForm__content--choiceBoxes">
        <ul className="editDecisionForm__list">
          {editImpacted.map((user) => (
            <li key={user.user_id} className="editDecisionForm__chosen">
              <img
                src={user.picture}
                alt={`avatar de ${user.firstname} ${user.lastname}`}
                className="editDecisionForm__chosen--avatar"
              />
              <p className="editDecisionForm__chosen--fullname">
                {user.firstname} {user.lastname}
                <button
                  type="button"
                  className="editDecisionForm__chosen--remove"
                  onClick={() => handleRemoveUser(user.user_id)}
                >
                  -
                </button>
              </p>
            </li>
          ))}
        </ul>
        <section className="editDecisionForm__search">
          <input
            className="editDecisionForm__input"
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
                className="editDecisionForm__search--options"
                key={user.user_id}
                aria-label="Noms"
                value={`${user.firstname} ${user.lastname} (${user.email})`}
              />
            ))}
          </datalist>
          <button
            className="editDecisionForm__submit"
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

EditDecisionFormImpacted.propTypes = {
  setEditDecisionFormImpacted: PropTypes.func.isRequired,
};

export default EditDecisionFormImpacted;
