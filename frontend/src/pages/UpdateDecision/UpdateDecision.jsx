import { useEffect, useState } from "react";
import UpdateCreateDecisionFormImpacted from "../../components/UpdateCreateDecisionForm/UpdateCreateDecisionFormImpacted";
import UpdateCreateDecisionFormExperts from "../../components/UpdateCreateDecisionForm/UpdateCreateDecisionFormExperts";
import UpdateCreateDecisionFormContent from "../../components/UpdateCreateDecisionForm/UpdateCreateDecisionFormContent";
import "./UpdateDecision.scss";
import { useDecisionContext } from "../../contexts/decisionContext";

function UpdateDecision() {
  const { decisionId } = useDecisionContext();
  const [updatedecision, setupdateDecision] = useState(""); // should I put a "" instead?
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/decision/${decisionId}`)
      .then((response) => response.json())
      .then((data) => setupdateDecision(data))
      .catch((error) => console.error(error));
  }, []);

  const [SelectedValue, setSelectedValue] = useState(
    updatedecision.decision_delay
  );
  const [title, setTitle] = useState(updatedecision.decision_title);
  const [details, setDetails] = useState(updatedecision.paragraph_details);
  const [impact, setImpact] = useState(updatedecision.paragraph_impact);
  const [benefits, setBenefits] = useState(updatedecision.paragraph_benefits);
  const [risks, setRisks] = useState(updatedecision.paragraph_risks);
  const [firstDecision, setFirstDecision] = useState(
    updatedecision.paragraph_first_decision
  );
  const [finalDecision, setFinalDecision] = useState(
    updatedecision.paragraph_finale_decision
  );
  useEffect(() => {
    setSelectedValue(updatedecision.decision_delay);
    setTitle(updatedecision.decision_title);
    setDetails(updatedecision.paragraph_details);
    setImpact(updatedecision.paragraph_impact);
    setBenefits(updatedecision.paragraph_benefits);
    setRisks(updatedecision.paragraph_risks);
    setFirstDecision(updatedecision.paragraph_first_decision);
    setFinalDecision(updatedecision.paragraph_finale_decision);
  }, [updatedecision]);

  return (
    <main className="createDecision__main">
      {updatedecision && (
        <>
          <UpdateCreateDecisionFormContent
            SelectedValue={SelectedValue}
            updateDecision={updatedecision}
            title={title}
            details={details}
            impact={impact}
            benefits={benefits}
            risks={risks}
            firstDecision={firstDecision}
            finalDecision={finalDecision}
            setSelectedValue={setSelectedValue}
            setTitle={setTitle}
            setDetails={setDetails}
            setImpact={setImpact}
            setBenefits={setBenefits}
            setRisks={setRisks}
            setFirstDecision={setFirstDecision}
            setFinalDecision={setFinalDecision}
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
