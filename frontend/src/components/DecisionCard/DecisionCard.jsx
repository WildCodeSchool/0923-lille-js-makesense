import { Link } from "react-router-dom";
import "./DecisionCard.scss";
import { useContext } from "react";
import PropTypes from "prop-types";
import { useDecisionContext } from "../../contexts/decisionContext";
import { AuthContext } from "../../contexts/authContext";

function DecisionCard({
  setDeleteDecision,
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

  const handleClickLink = async () => {
    setDecisionId(id);
  };

  const handleClick = async () => {
    setDecisionId(id);

    try {
      const response = await fetch(
        `${
          import.meta.env.VITE_BACKEND_URL
        }/api/decisions/${decisionId}/users/${user[0].user_id}`,
        { method: "DELETE" }
      );

      setDeleteDecision(true);
      if (response.ok) {
        // La suppression a réussi, mettez à jour l'état local pour déclencher un re-render
        console.info("La décision a été supprimée avec succès");
      } else {
        // La suppression a échoué, vous pouvez gérer les erreurs ici
        console.error("Erreur lors de la suppression de la décision");
      }
    } catch (error) {
      console.error("Erreur lors de la suppression de la décision:", error);
    }
  };

  return (
    <section>
      <button
        onClick={handleClick}
        onKeyUp={handleClick}
        type="button"
        className="delete_button"
      >
        X
      </button>
      <Link onClick={handleClickLink} to="/decision">
        <button type="button" className="decisionCard__container">
          <section className="title_delete">
            <h2>{title}</h2>
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
  setDeleteDecision: PropTypes.func.isRequired,
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
