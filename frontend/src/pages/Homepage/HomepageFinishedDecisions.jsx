import "./Homepage.scss";
import { useState, useEffect } from "react";
import DecisionCard from "../../components/DecisionCard/DecisionCard";
import { useDecisionContext } from "../../contexts/decisionContext";

function HomepageFinishedDecisions() {
  const [relatedDecisions, setRelatedDecisions] = useState();
  const { decisionId } = useDecisionContext();
  const { deleteDecision, setDeleteDecision } = useDecisionContext();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/decision/completed`)
      .then((response) => response.json())
      .then((data) => {
        setRelatedDecisions(data);
      })
      .catch((error) => console.error(error));
  }, [decisionId, deleteDecision]);

  return (
    <>
      <h1 className="homepage__title">Décisions terminées</h1>
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

export default HomepageFinishedDecisions;
