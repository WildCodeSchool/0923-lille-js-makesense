import "./Homepage.scss";
import SecondaryNav from "../../components/SecondaryNav/SecondaryNav";
import DecisionCard from "../../components/DecisionCard/DecisionCard";

function Homepage() {
  return (
    <>
      <SecondaryNav />
      <h1 className="homepage__title">Décisions en cours</h1>
      <DecisionCard />
    </>
  );
}

export default Homepage;
