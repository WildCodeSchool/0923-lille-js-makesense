import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./MyProfile.scss";

function MyProfile({ handleMoveBubble, edit }) {
  return (
    edit && (
      <nav className="bubble__menu" onMouseLeave={handleMoveBubble}>
        <ul className="bubble__list">
          <li>Prénom</li>
          <li>Nom</li>
          <li>Email</li>
          <li>Bureau</li>
          <li>Poste</li>
          <li>
            <a
              className="bubble__help"
              title="Une erreur ? Contactez l'administrateur."
              href="mailto:make_sense.admins@gmail.com"
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
  edit: PropTypes.bool.isRequired,
  handleMoveBubble: PropTypes.func.isRequired,
};

export default MyProfile;
