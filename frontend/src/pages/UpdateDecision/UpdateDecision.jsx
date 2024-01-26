import { useEffect } from "react";
import { Link } from "react-router-dom";
import UpdateCreateDecisionFormImpacted from "../../components/UpdateCreateDecisionForm/UpdateCreateDecisionFormImpacted";
import UpdateCreateDecisionFormExperts from "../../components/UpdateCreateDecisionForm/UpdateCreateDecisionFormExperts";
import UpdateCreateDecisionFormContent from "../../components/UpdateCreateDecisionForm/UpdateCreateDecisionFormContent";
import "./UpdateDecision.scss";
import { useDecisionContext } from "../../contexts/decisionContext";

function UpdateDecision() {
  const { decisionId } = useDecisionContext();
  const { decisions, setDecisions } = useDecisionContext();
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/decision/${decisionId}`)
      .then((response) => response.json())
      .then((data) => setDecisions(data))
      .catch((error) => console.error(error));
  }, []);

  const handleUpdateDecision = () => {
    const apiEndpoint = `${
      import.meta.env.VITE_BACKEND_URL
    }/api/decision/update`;

    const updatedData = {
      paragraph_details: decisions.paragraph_details,
      paragraph_impact: decisions.paragraph_impact,
      paragraph_benefits: decisions.paragraph_benefits,
      paragraph_risks: decisions.paragraph_risks,
      paragraph_first_decision: decisions.paragraph_first_decision,
      paragraph_finale_decision: decisions.paragraph_finale_decision,
      decision_id: decisionId,
    };

    const updatedDatas = {
      status: decisions.status,
      decision_delay: decisions.decision_delay,
      decision_title: decisions.decision_title,
      decision_id: decisionId,
    };

    fetch(apiEndpoint, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([updatedData, updatedDatas]),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        window.location.reload();
        console.info("Mise à jour réussie :", data);
      })
      .catch((error) => {
        console.error("Erreur lors de la mise à jour :", error);
      });
  };

  return (
    <main className="createDecision__main">
      {decisions && (
        <UpdateCreateDecisionFormContent
          decisions={decisions}
          setDecisions={setDecisions}
        />
      )}
      <aside className="createDecision__aside">
        <UpdateCreateDecisionFormExperts />
        <UpdateCreateDecisionFormImpacted />
        <Link
          to="/homepage"
          onClick={handleUpdateDecision}
          type="button"
          className="createDecisionForm__button"
        >
          Mettre à jour la décision
        </Link>
      </aside>
    </main>
  );
}

export default UpdateDecision;
