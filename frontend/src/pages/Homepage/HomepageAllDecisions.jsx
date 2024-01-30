import "./Homepage.scss";
import DecisionCard from "../../components/DecisionCard/DecisionCard";
import { useDecisionContext } from "../../contexts/decisionContext";

function HomepageAllDecisions() {
  const { decisions } = useDecisionContext();

  return (
    <>
      <h1 className="homepage__title">Toutes les décisions</h1>
      <main className="homepage__main">
        {decisions
          ? decisions
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

export default HomepageAllDecisions;
