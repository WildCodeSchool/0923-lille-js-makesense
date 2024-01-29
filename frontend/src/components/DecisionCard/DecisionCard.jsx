import { Link } from "react-router-dom";
import "./DecisionCard.scss";
import { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { useDecisionContext } from "../../contexts/decisionContext";
import { AuthContext } from "../../contexts/authContext";

function DecisionCard({
  title,
  status,
  authorFirstname,
  authorLastname,
  location,
  comments,
  picture,
  id,
}) {
  const { decisionId, setDecisionId } = useDecisionContext();
  const { user } = useContext(AuthContext);
  const { deleteDecision, setDeleteDecision } = useDecisionContext();

  const handleDeleteClick = (event) => {
    event.preventDefault();

    fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/decision/delete/${id}/users/${
        user[0].user_id
      }`,
      { method: "DELETE" }
    )
      .then((response) => {
        if (response.status === 200) {
          setDeleteDecision(!deleteDecision);
        }
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    // Effect pour quelque chose ?
  }, [decisionId]);

  return (
    <section>
      <Link onClick={() => setDecisionId(id)} to="/decision">
        <button type="button" className="decisionCard__container">
          <section className="title_delete">
            <h2>{title}</h2>
            <button
              onClick={handleDeleteClick}
              onKeyUp={() => setDecisionId(id)}
              type="button"
              className="delete_button"
            >
              X
            </button>
          </section>
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
            <span className="decisionCard__comments">{comments} avis</span>
          </span>
        </button>
      </Link>
    </section>
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
  id: PropTypes.number.isRequired,
};

export default DecisionCard;
