import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Profile.scss";

function Profile({ handleMoveBubble, showProfile, user }) {
  return (
    showProfile && (
      <nav className="bubble__menu" onMouseLeave={handleMoveBubble}>
        <ul className="bubble__list">
          <li>
            {user.firstname} {user.lastname}
          </li>
          <li>{user.email}</li>
          <li>{user.location}</li>
          <li>
            <a
              className="bubble__help"
              title="Une erreur ? Contactez l'administrateur."
              href="mailto:vincent.rssx59@gmail.com"
              onClick={handleMoveBubble}
            >
              ?
            </a>
          </li>
          <li className="bubble__logout">
            <hr className="bubble__line" />
            <Link to="/" className="bubble__link">
              Déconnexion
            </Link>
          </li>
        </ul>
      </nav>
    )
  );
}

Profile.propTypes = {
  showProfile: PropTypes.bool.isRequired,
  handleMoveBubble: PropTypes.func.isRequired,
  user: PropTypes.shape().isRequired,
};

export default Profile;
