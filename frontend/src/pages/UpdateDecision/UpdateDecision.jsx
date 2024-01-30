import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UpdateCreateDecisionFormImpacted from "../../components/UpdateCreateDecisionForm/UpdateCreateDecisionFormImpacted";
import UpdateCreateDecisionFormExperts from "../../components/UpdateCreateDecisionForm/UpdateCreateDecisionFormExperts";
import UpdateCreateDecisionFormContent from "../../components/UpdateCreateDecisionForm/UpdateCreateDecisionFormContent";
import "./UpdateDecision.scss";
import { useDecisionContext } from "../../contexts/decisionContext";

function UpdateDecision() {
  const { decisionId } = useDecisionContext();
  const [updateDecisionFormExperts, setUpdateDecisionFormExperts] = useState(
    {}
  );
  const [updateDecisionFormImpacted, setUpdateDecisionFormImpacted] = useState(
    {}
  );
  const { decisions, setDecisions } = useDecisionContext();
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/decisions/${decisionId}`)
      .then((response) => response.json())
      .then((data) => setDecisions(data))
      .catch((error) => console.error(error));
  }, []);

  const [updatedParagraph, setUpdateParagraph] = useState();

  useEffect(() => {
    setUpdateParagraph([
      {
        paragraph_details: decisions.paragraph_details,
        paragraph_impact: decisions.paragraph_impact,
        paragraph_benefits: decisions.paragraph_benefits,
        paragraph_risks: decisions.paragraph_risks,
        paragraph_first_decision: decisions.paragraph_first_decision,
        paragraph_finale_decision: decisions.paragraph_finale_decision,
        decision_id: decisionId,
      },
      {
        status: decisions.status,
        decision_delay: decisions.decision_delay,
        decision_title: decisions.decision_title,
        decision_id: decisionId,
      },
    ]);
  }, [decisions]);

  const handleUpdateDecision = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/decision/update`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedParagraph),
    })
      .then((response) => response.json())
      .then((data) => {
        console.info("Updated", data);
        setDecisions(updatedParagraph[1]);
      })
      .catch((error) => {
        console.error("Error during update", error);
      });
    fetch(
      `${
        import.meta.env.VITE_BACKEND_URL
      }/api/decision/${decisionId}/create/assigned`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          experts: updateDecisionFormExperts,
          impacted: updateDecisionFormImpacted,
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => console.info("Assigned created", data))
      .catch((error) => {
        console.error("Error during assignment", error);
      });
  };

  return (
    <main className="updateDecision__main">
      <UpdateCreateDecisionFormContent
        decisions={decisions}
        setDecisions={setDecisions}
      />
      <aside className="updateDecision__aside">
        <UpdateCreateDecisionFormExperts
          setUpdateDecisionFormExperts={setUpdateDecisionFormExperts}
        />
        <UpdateCreateDecisionFormImpacted
          setUpdateDecisionFormImpacted={setUpdateDecisionFormImpacted}
        />
        <Link
          to="/decision"
          onClick={handleUpdateDecision}
          type="button"
          className="updateDecisionForm__button"
        >
          Mettre à jour la décision
        </Link>
      </aside>
    </main>
  );
}

export default UpdateDecision;
