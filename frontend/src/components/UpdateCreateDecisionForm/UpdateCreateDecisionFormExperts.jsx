import "./UpdateCreateDecisionForm.scss";
import { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import { useDecisionContext } from "../../contexts/decisionContext";

function UpdateDecisionFormExperts({ setUpdateDecisionFormExperts }) {
  const { decisionId } = useDecisionContext();

  const [updateExperts, setUpdateExperts] = useState([]);

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
      `${import.meta.env.VITE_BACKEND_URL}/api/decisions/${decisionId}/experts`
    )
      .then((response) => response.json())
      .then((data) => setUpdateExperts(data))
      .catch((error) => console.error(error));
  }, [decisionId]);

  const handleInputChange = (e) => {
    // read keyboard inputs to autocomplete based on users
    setSearchUser(e.target.value);
  };

  // Add an expert to the filtered users
  const handleAddUser = () => {
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
    }
  };

  // Wait for the newFiltteredUser to be added before updating the filteredUsers state
  useEffect(() => {
    // update the expert list sent to the parent
    setUpdateDecisionFormExperts(filteredUsers);
    // Clear input after validation
    setSearchUser("");
  }, [filteredUsers]);

  // Remove an expert from the filtered list
  const handleRemoveUser = (userId) => {
    setFilteredUsers((prevFilteredUsers) =>
      prevFilteredUsers.filter((user) => user.user_id !== userId)
    );
    // update the expert list sent to the parent
    setUpdateDecisionFormExperts(filteredUsers);
  };

  return (
    <article className="updateDecisionForm__experts">
      <h2 className="updateDecisionForm__titles">Expert·e·s</h2>
      <span className="updateDecisionForm__content updateDecisionForm__content--choiceBoxes">
        <ul className="updateDecisionForm__list">
          {updateExperts.map((user) => (
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
            placeholder="Rechercher expert·e·s"
            value={searchUser}
            onChange={handleInputChange}
            list="usersList"
            ref={expertRef}
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

UpdateDecisionFormExperts.propTypes = {
  setUpdateDecisionFormExperts: PropTypes.func.isRequired,
};

export default UpdateDecisionFormExperts;
