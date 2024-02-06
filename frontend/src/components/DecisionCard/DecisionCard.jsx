import { Link } from "react-router-dom";
import "./DecisionCard.scss";
import { useContext, useEffect, useState } from "react";
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
  const { setDecisionId } = useDecisionContext();
  const { user } = useContext(AuthContext);
  const { deleteDecision, setDeleteDecision } = useDecisionContext();
  const [isAdmin, setIsAdmin] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState(false);

  const handleDeleteClick = (event) => {
    event.preventDefault();
    setConfirmDelete(true);
  };

  const handleConfirmDelete = () => {
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
    // Reset confirmDelete state
    setConfirmDelete(false);
  };

  const handleCancelDelete = () => {
    // Reset confirmDelete state
    setConfirmDelete(false);
  };

  useEffect(() => {
    if (!user[0].admin_id) {
      setIsAdmin("decisionCard__delete--notAdmin");
    }
    if (user[0].admin_id) {
      setIsAdmin(false);
    }
  }, []);

  return (
    <section>
      {confirmDelete && (
        <article className="decisionCard__delete--dialog">
          <p>
            Vous êtes sur le point de supprimer définitivement cette décision,
            êtes-vous sûr ?
          </p>
          <span>
            <button type="button" onClick={handleConfirmDelete}>
              Oui
            </button>
            <button type="button" onClick={handleCancelDelete}>
              Non
            </button>
          </span>
        </article>
      )}
      <Link
        className="decisionCard__link"
        onClick={() => setDecisionId(id)}
        to="/decision"
      >
        <button type="button" className="decisionCard__container">
          <span
            onClick={handleDeleteClick}
            onKeyUp={() => setDecisionId(id)}
            role="button"
            tabIndex="0"
            className={`delete_button ${isAdmin}`}
          >
            x
          </span>
          <section className="title_delete">
            {/* Titles are too long for the small cards in homepage, only displaying the first 37 characters */}
            <h2>
              {title.length >= 40 ? `${title.substring(0, 37)} (...)` : title}
            </h2>
          </section>
          <p className="decisionCard__author">
            <img
              src={
                picture &&
                `${import.meta.env.VITE_BACKEND_URL}/uploads/${picture}`
              }
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
