import "./Homepage.scss";
import { useState, useEffect, useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import SecondaryNav from "../../components/SecondaryNav/SecondaryNav";
import { AuthContext } from "../../contexts/authContext";
import { useDecisionContext } from "../../contexts/decisionContext";

function Homepage() {
  const [decisionsHome, setDecisionsHome] = useState();

  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { setDecisions } = useDecisionContext();

  // Redirect unconnected users
  useEffect(() => {
    if (user[0].user_id === 0) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/decisions/all`)
      .then((response) => response.json())
      .then((data) => {
        setDecisionsHome(data);
        setDecisions(data);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <>
      <SecondaryNav />
      <Outlet decisionsHome={decisionsHome} />
    </>
  );
}

export default Homepage;
