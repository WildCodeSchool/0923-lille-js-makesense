import "./Homepage.scss";
import { useState, useEffect } from "react";
import DecisionCard from "../../components/DecisionCard/DecisionCard";

function HomepagePendingDecisions() {
  const [relatedDecisions, setRelatedDecisions] = useState();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/decision/pending`)
      .then((response) => response.json())
      .then((data) => {
        setRelatedDecisions(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <h1 className="homepage__title">Décisions en cours</h1>
      <main className="homepage__main">
        {relatedDecisions
          ? relatedDecisions
              .toReversed()
              .map((card) => (
                <DecisionCard
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

export default HomepagePendingDecisions;
