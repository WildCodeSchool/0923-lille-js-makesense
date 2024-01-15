import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./MyProfile.scss";

function MyProfile({ handleMovebubble, edit }) {
  return (
    edit && (
      <>
        <aside className="bubble_profile" />
        <section className="bubble_avatar" onMouseLeave={handleMovebubble}>
          <ul className="bubble_list">
            <li>Prénom</li>
            <li>Nom</li>
            <li>Email</li>
            <li>Bureau</li>
            <li>Poste</li>
            <li className="bubble_hover">
              <a
                title="Une erreur ? Contactez l'administrateur."
                href="mailto:vincent.rssx59@gmail.com"
                onClick={handleMovebubble}
              >
                ?
              </a>
            </li>
            <hr />
            <li id="bubble_logout">
              <Link to="/" className="bubble_link">
                Se déconnecter
              </Link>
            </li>
          </ul>
        </section>
      </>
    )
  );
}

MyProfile.propTypes = {
  edit: PropTypes.bool.isRequired,
  handleMovebubble: PropTypes.func.isRequired,
};

export default MyProfile;
