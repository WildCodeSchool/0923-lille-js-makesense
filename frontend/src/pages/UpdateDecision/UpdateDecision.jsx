import { useEffect, useState } from "react";
import UpdateCreateDecisionFormImpacted from "../../components/UpdateCreateDecisionForm/UpdateCreateDecisionFormImpacted";
import UpdateCreateDecisionFormExperts from "../../components/UpdateCreateDecisionForm/UpdateCreateDecisionFormExperts";
import UpdateCreateDecisionFormContent from "../../components/UpdateCreateDecisionForm/UpdateCreateDecisionFormContent";
import "./UpdateDecision.scss";
import { useDecisionContext } from "../../contexts/decisionContext";

function UpdateDecision() {
  const { decisionId } = useDecisionContext();
  const [updatedecision, setupdateDecision] = useState(1); // should I put a "" instead?
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/decision/${decisionId}`)
      .then((response) => response.json())
      .then((data) => setupdateDecision(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <main className="createDecision__main">
      {updatedecision && (
        <>
          <UpdateCreateDecisionFormContent
            title={updatedecision.decision_title}
            details={updatedecision.paragraph_details}
            impact={updatedecision.paragraph_impact}
            benefits={updatedecision.paragraph_benefits}
            risks={updatedecision.paragraph_risks}
            firstDecision={updatedecision.paragraph_first_decision}
            finalDecision={updatedecision.paragraph_finale_decision}
          />
          <aside className="createDecision__aside">
            <UpdateCreateDecisionFormExperts />
            <UpdateCreateDecisionFormImpacted />
            <button type="button" className="createDecisionForm__button">
              Mettre à jour la décision
            </button>
          </aside>
        </>
      )}
    </main>
  );
}

export default UpdateDecision;
