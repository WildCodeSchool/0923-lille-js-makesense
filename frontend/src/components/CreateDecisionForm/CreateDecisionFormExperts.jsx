import "./CreateDecisionForm.scss";
import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

function CreateDecisionFormExperts({ setCreateDecisionFormExperts }) {
  // list all users
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

  // Wait for the newFilteredUser to be added before updating the filteredUsers state
  useEffect(() => {
    // update the expert list sent to the parent
    setCreateDecisionFormExperts(filteredUsers);
    // Clear input after validation
    setSearchUser("");
  }, [filteredUsers]);

  // Remove an expert from the filtered list
  const handleRemoveUser = (userId) => {
    setFilteredUsers((prevFilteredUsers) =>
      prevFilteredUsers.filter((user) => user.user_id !== userId)
    );
    // update the expert list sent to the parent
    setCreateDecisionFormExperts(filteredUsers);
  };

  return (
    <article className="createDecisionForm__experts">
      <h2 className="createDecisionForm__titles">Expert·e·s</h2>
      <span className="createDecisionForm__content createDecisionForm__content--choiceBoxes">
        <ul className="createDecisionForm__list">
          {filteredUsers.map((user) => (
            <li key={user.user_id} className="createDecisionForm__chosen">
              <img
                src={`${import.meta.env.VITE_BACKEND_URL}/uploads/${
                  user.picture
                }`}
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
            onClick={handleAddUser}
          >
            Choisir
          </button>
        </section>
      </span>
    </article>
  );
}

CreateDecisionFormExperts.propTypes = {
  setCreateDecisionFormExperts: PropTypes.func.isRequired,
};

export default CreateDecisionFormExperts;
