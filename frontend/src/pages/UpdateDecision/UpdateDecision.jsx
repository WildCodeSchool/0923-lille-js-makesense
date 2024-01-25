import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UpdateCreateDecisionFormImpacted from "../../components/UpdateCreateDecisionForm/UpdateCreateDecisionFormImpacted";
import UpdateCreateDecisionFormExperts from "../../components/UpdateCreateDecisionForm/UpdateCreateDecisionFormExperts";
import UpdateCreateDecisionFormContent from "../../components/UpdateCreateDecisionForm/UpdateCreateDecisionFormContent";
import "./UpdateDecision.scss";
import { useDecisionContext } from "../../contexts/decisionContext";

function UpdateDecision() {
  const { decisionId } = useDecisionContext();
  const [updateDecision, setupdateDecision] = useState("");
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/decision/${decisionId}`)
      .then((response) => response.json())
      .then((data) => setupdateDecision(data))
      .catch((error) => console.error(error));
  }, []);

  const [progress, setProgress] = useState(updateDecision.status);
  const [selectedValue, setSelectedValue] = useState(
    updateDecision.decision_delay
  );
  const [title, setTitle] = useState(updateDecision.decision_title);
  const [details, setDetails] = useState(updateDecision.paragraph_details);
  const [impact, setImpact] = useState(updateDecision.paragraph_impact);
  const [benefits, setBenefits] = useState(updateDecision.paragraph_benefits);
  const [risks, setRisks] = useState(updateDecision.paragraph_risks);
  const [firstDecision, setFirstDecision] = useState(
    updateDecision.paragraph_first_decision
  );
  const [finalDecision, setFinalDecision] = useState(
    updateDecision.paragraph_finale_decision
  );
  useEffect(() => {
    setProgress(updateDecision.status);
    setSelectedValue(updateDecision.decision_delay);
    setTitle(updateDecision.decision_title);
    setDetails(updateDecision.paragraph_details);
    setImpact(updateDecision.paragraph_impact);
    setBenefits(updateDecision.paragraph_benefits);
    setRisks(updateDecision.paragraph_risks);
    setFirstDecision(updateDecision.paragraph_first_decision);
    setFinalDecision(updateDecision.paragraph_finale_decision);
  }, [updateDecision]);

  const handleUpdateDecision = () => {
    const apiEndpoint = `${
      import.meta.env.VITE_BACKEND_URL
    }/api/decision/update`;

    const updatedData = {
      paragraph_details: details,
      paragraph_impact: impact,
      paragraph_benefits: benefits,
      paragraph_risks: risks,
      paragraph_first_decision: firstDecision,
      paragraph_finale_decision: finalDecision,
      decision_id: decisionId,
    };

    const updatedDatas = {
      status: progress,
      decision_delay: selectedValue,
      decision_title: title,
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
        console.info("Mise à jour réussie :", data);
        window.location.reload();
      })
      .catch((error) => {
        console.error("Erreur lors de la mise à jour :", error);
      });
  };

  return (
    <main className="createDecision__main">
      {updateDecision && (
        <>
          <UpdateCreateDecisionFormContent
            progress={progress}
            selectedValue={selectedValue}
            updateDecision={updateDecision}
            title={title}
            details={details}
            impact={impact}
            benefits={benefits}
            risks={risks}
            firstDecision={firstDecision}
            finalDecision={finalDecision}
            setProgress={setProgress}
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
            <Link
              to="/homepage"
              onClick={handleUpdateDecision}
              type="button"
              className="createDecisionForm__button"
            >
              Mettre à jour la décision
            </Link>
          </aside>
        </>
      )}
    </main>
  );
}

export default UpdateDecision;
