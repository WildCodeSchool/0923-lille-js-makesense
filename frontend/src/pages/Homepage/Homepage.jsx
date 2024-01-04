import "./Homepage.scss";
import { mockDecision, mockUser, mockComments } from "../../mockData";
import SecondaryNav from "../../components/SecondaryNav/SecondaryNav";
import DecisionCard from "../../components/DecisionCard/DecisionCard";

function Homepage() {
  return (
    <>
      <SecondaryNav />
      <h1 className="homepage__title">Décisions en cours</h1>
      <main className="homepage__main">
        {mockDecision
          ? mockDecision.map((card) => (
              <DecisionCard
                title={card.title}
                status={card.status}
                mockUser={mockUser[0]}
                mockComments={mockComments}
              />
            ))
          : "Loading"}
      </main>
    </>
  );
}

export default Homepage;
