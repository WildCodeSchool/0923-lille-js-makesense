import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";
import EditDecisionFormContent from "../../components/EditDecisionForm/EditDecisionFormContent";
import EditDecisionFormExperts from "../../components/EditDecisionForm/EditDecisionFormExperts";
import EditDecisionFormImpacted from "../../components/EditDecisionForm/EditDecisionFormImpacted";
import "./EditDecision.scss";

function EditDecision() {
  const { user } = useContext(AuthContext);
  const [decisionContent, setDecisionContent] = useState({
    content: {},
    experts: {},
    impacted: {},
  });
  const [decisionStatus] = useState("Décision commencée");

  // Hook for navigation
  const navigate = useNavigate();

  // Redirect unconnected users
  useEffect(() => {
    if (user[0].user_id === 0) {
      navigate("/");
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const apiEndpoint = `${import.meta.env.VITE_BACKEND_URL}/api/decision/${
      decisionContent.content.decision_id ? "update" : "create"
    }`;

    try {
      const response = await fetch(apiEndpoint, {
        method: decisionContent.content.decision_id ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...decisionContent.content,
          status: decisionStatus,
          user_id: user[0].user_id,
          experts: decisionContent.experts,
          impacted: decisionContent.impacted,
        }),
      });

      if (response.status === 201 || response.status === 200) {
        navigate("/homepage/decisions/all");
      } else {
        console.info(response);
      }
    } catch (err) {
      console.error("Error in decision creation/update", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="editDecision__main">
      <EditDecisionFormContent
        decisionContent={decisionContent}
        setDecisionContent={setDecisionContent}
      />
      <aside className="editDecision__aside">
        <EditDecisionFormExperts
          setDecisionContent={setDecisionContent}
          decisionContent={decisionContent}
        />
        <EditDecisionFormImpacted
          setDecisionContent={setDecisionContent}
          decisionContent={decisionContent}
        />
        <button type="submit" className="editDecisionForm__button">
          {decisionContent.content.decision_id ? "Mettre à jour" : "Publier"}
        </button>
      </aside>
    </form>
  );
}

export default EditDecision;
