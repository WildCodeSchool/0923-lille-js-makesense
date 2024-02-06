import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UpdateCreateDecisionFormImpacted from "../../components/UpdateCreateDecisionForm/UpdateCreateDecisionFormImpacted";
import UpdateCreateDecisionFormExperts from "../../components/UpdateCreateDecisionForm/UpdateCreateDecisionFormExperts";
import UpdateCreateDecisionFormContent from "../../components/UpdateCreateDecisionForm/UpdateCreateDecisionFormContent";
import "./UpdateDecision.scss";
import { useDecisionContext } from "../../contexts/decisionContext";
import { AuthContext } from "../../contexts/authContext";

function UpdateDecision() {
  const navigate = useNavigate();
  const [updateDecisionFormExperts, setUpdateDecisionFormExperts] = useState(
    {}
  );
  const [updateDecisionFormImpacted, setUpdateDecisionFormImpacted] = useState(
    {}
  );
  const [updatedParagraph, setUpdateParagraph] = useState();
  const { decisionId, editedDecisions, setEditedDecisions } =
    useDecisionContext();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/decisions/${decisionId}`)
      .then((response) => response.json())
      .then((data) => setEditedDecisions(data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    if (!user[0].user_id) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    setUpdateParagraph([
      {
        paragraph_details: editedDecisions.paragraph_details,
        paragraph_impact: editedDecisions.paragraph_impact,
        paragraph_benefits: editedDecisions.paragraph_benefits,
        paragraph_risks: editedDecisions.paragraph_risks,
        paragraph_first_decision: editedDecisions.paragraph_first_decision,
        paragraph_finale_decision: editedDecisions.paragraph_finale_decision,
        decision_id: decisionId,
      },
      {
        status: editedDecisions.status,
        decision_delay: editedDecisions.decision_delay,
        decision_title: editedDecisions.decision_title,
        decision_id: decisionId,
      },
    ]);
  }, [editedDecisions]);

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
        setEditedDecisions(updatedParagraph[1]);
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
        editedDecisions={editedDecisions}
        setEditedDecisions={setEditedDecisions}
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
