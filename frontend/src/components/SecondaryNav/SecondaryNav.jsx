import { useContext } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../../contexts/authContext";
import "./SecondaryNav.scss";

function SecondaryNav({ setRelatedDecisions }) {
  const { user } = useContext(AuthContext);

  const handleClickFilterMyDecisions = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/decisions/${
      user[0].user_id
    }/related-decisions
      `)
      .then((response) => response.json())
      .then((data) => setRelatedDecisions(data))
      .catch((error) => console.error(error));
  };
  const handleClickFilterPendingDecisions = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/decisions/pending`)
      .then((response) => response.json())
      .then((data) => setRelatedDecisions(data))
      .catch((error) => console.error(error));
  };

  const handleClickFilterDecisionsCompleted = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/decisions/completed`)
      .then((response) => response.json())
      .then((data) => setRelatedDecisions(data))
      .catch((error) => console.error(error));
  };

  const handleClickFilterCurrentDécisions = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/decisions/current`)
      .then((response) => response.json())
      .then((data) => setRelatedDecisions(data))
      .catch((error) => console.error(error));
  };

  return (
    <nav className="secondaryNav__nav">
      <ul className="secondaryNav__button">
        <button
          onClick={handleClickFilterCurrentDécisions}
          type="button"
          className="secondaryNav__button--first"
        >
          Décisions en cours
        </button>
        <button
          onClick={handleClickFilterPendingDecisions}
          type="button"
          className="secondaryNav__button--second"
        >
          Décisions en retard
        </button>
        <button
          onClick={handleClickFilterMyDecisions}
          type="button"
          className="secondaryNav__button--third"
        >
          Vos décisions
        </button>
        <button
          onClick={handleClickFilterDecisionsCompleted}
          type="button"
          className="secondaryNav__button--third"
        >
          Décisions terminées
        </button>
      </ul>
      <img
        src={`${import.meta.env.VITE_BACKEND_URL}/images/ban-bottom.png`}
        alt="decoration navigation"
        className="secondaryNav__bottom"
      />
    </nav>
  );
}

SecondaryNav.propTypes = {
  setRelatedDecisions: PropTypes.func.isRequired,
};

export default SecondaryNav;
