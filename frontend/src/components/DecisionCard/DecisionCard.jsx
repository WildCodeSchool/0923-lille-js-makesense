import { Link } from "react-router-dom";
import "./DecisionCard.scss";
import PropTypes from "prop-types";

function DecisionCard({
  title,
  status,
  authorFirstname,
  authorLastname,
  location,
  comments,
  picture,
}) {
  return (
    <Link to="/decision">
      <button type="button" className="decisionCard__container">
        <h2>{title}</h2>
        <p className="decisionCard__author">
          <img
            src={picture}
            alt="avatar de l'auteur"
            className="decisionCard__avatar"
          />
          par
          <strong className="decisionCard__author--fullname">
            {authorFirstname} {authorLastname}
          </strong>
        </p>
        <span className="decisionCard__beans">
          <span className="decisionCard__status">{status}</span>
          <span className="decisionCard__location">{location}</span>
          <span className="decisionCard__advices">{comments} avis</span>
        </span>
      </button>
    </Link>
  );
}

DecisionCard.propTypes = {
  title: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  authorFirstname: PropTypes.string.isRequired,
  authorLastname: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  comments: PropTypes.number.isRequired,
  picture: PropTypes.string.isRequired,
};

export default DecisionCard;
