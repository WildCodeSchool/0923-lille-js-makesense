import "./Homepage.scss";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import DecisionCard from "../../components/DecisionCard/DecisionCard";
import { useDecisionContext } from "../../contexts/decisionContext";

function HomepageCurrentDecisions({ deleteDecision, setDeleteDecision }) {
  const [relatedDecisions, setRelatedDecisions] = useState();
  const { decisionId } = useDecisionContext();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/decision/current`)
      .then((response) => response.json())
      .then((data) => {
        setRelatedDecisions(data);
      })
      .catch((error) => console.error(error));
  }, [decisionId, deleteDecision]);

  return (
    <>
      <h1 className="homepage__title">Décisions en cours</h1>
      <main className="homepage__main">
        {relatedDecisions
          ? relatedDecisions
              .toReversed()
              .map((card) => (
                <DecisionCard
                  deleteDecision={deleteDecision}
                  setDeleteDecision={setDeleteDecision}
                  key={card.decision_id}
                  title={card.decision_title}
                  status={card.status}
                  authorFirstname={card.firstname}
                  authorLastname={card.lastname}
                  location={card.location}
                  comments={card.nb_comments}
                  picture={card.picture}
                  id={card.decision_id}
                />
              ))
          : "Loading"}
      </main>
    </>
  );
}

HomepageCurrentDecisions.propTypes = {
  deleteDecision: PropTypes.bool.isRequired,
  setDeleteDecision: PropTypes.func.isRequired,
};

export default HomepageCurrentDecisions;
