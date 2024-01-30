import "./Homepage.scss";
import { useState, useEffect, useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useDecisionContext } from "../../contexts/decisionContext";
import { AuthContext } from "../../contexts/authContext";
import SecondaryNav from "../../components/SecondaryNav/SecondaryNav";

function Homepage() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { setDecisions, decisionId, deleteDecision } = useDecisionContext();
  const [decisionsHome, setDecisionsHome] = useState();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/decisions/all`)
      .then((response) => response.json())
      .then((data) => {
        setDecisionsHome(data);
        setDecisions(data);
      })
      .catch((error) => console.error(error));
  }, [decisionId, deleteDecision]);

  useEffect(() => {
    if (user[0].user_id === 0) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <SecondaryNav />
      <Outlet decisionsHome={decisionsHome} />
    </>
  );
}

export default Homepage;
