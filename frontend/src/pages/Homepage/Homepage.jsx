import "./Homepage.scss";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import SecondaryNav from "../../components/SecondaryNav/SecondaryNav";
import DecisionCard from "../../components/DecisionCard/DecisionCard";
import { AuthContext } from "../../contexts/authContext";

function Homepage() {
  const [decisions, setDecisions] = useState();

  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  // Le site n'est accessible qu'en étant connecté
  useEffect(() => {
    if (user[0].user_id === 0) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/decisions/all`)
      .then((response) => response.json())
      .then((data) => setDecisions(data))
      .catch((error) => console.error(error));
  }, [decisions]);
  return (
    <>
      <SecondaryNav />
      <h1 className="homepage__title">Décisions en cours</h1>
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

export default Homepage;
