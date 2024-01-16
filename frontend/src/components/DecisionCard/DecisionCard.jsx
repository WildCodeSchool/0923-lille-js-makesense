import { Link } from "react-router-dom";
import "./DecisionCard.scss";
import PropTypes from "prop-types";

function DecisionCard({ mockUser, mockComments, title, status }) {
  return (
    <Link to="/decision">
      <button type="button" className="decisionCard__container">
        <h2>{title}</h2>
        <p className="decisionCard__author">
          <img
            src={mockUser.picture}
            alt="avatar de l'auteur"
            className="decisionCard__avatar"
          />
          par
          <strong className="decisionCard__author--fullname">
            {mockUser.firstname} {mockUser.lastname}
          </strong>
        </p>
        <span className="decisionCard__beans">
          <span className="decisionCard__status">{status}</span>
          <span className="decisionCard__location">{mockUser.location}</span>
          <span className="decisionCard__comments">
            {mockComments.length} avis
          </span>
        </span>
      </button>
    </Link>
  );
}

DecisionCard.propTypes = {
  mockUser: PropTypes.shape({
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }).isRequired,
  mockComments: PropTypes.arrayOf.isRequired,
  title: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default DecisionCard;
