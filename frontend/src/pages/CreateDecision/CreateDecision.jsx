import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CreateDecisionFormContent from "../../components/CreateDecisionForm/CreateDecisionFormContent";
import CreateDecisionFormExperts from "../../components/CreateDecisionForm/CreateDecisionFormExperts";
import CreateDecisionFormImpacted from "../../components/CreateDecisionForm/CreateDecisionFormImpacted";
import "./CreateDecision.scss";
import { AuthContext } from "../../contexts/authContext";

function CreateDecision() {
  const { user } = useContext(AuthContext);
  const [createDecisionFormContent, setCreateDecisionFormContent] = useState(
    {}
  );
  const [createDecisionFormExperts, setCreateDecisionFormExperts] = useState(
    {}
  );
  const [createDecisionFormImpacted, setCreateDecisionFormImpacted] = useState(
    {}
  );
  const [decisionStatus] = useState("Décision commencée");

  // Hook pour la navigation
  const navigate = useNavigate();

  // Le site n'est accessible qu'en étant connecté
  useEffect(() => {
    if (user[0].user_id === 0) {
      navigate("/");
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Appel à l'API pour demander une connexion
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/decision/create`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            decision_delay: createDecisionFormContent.decisionDelayRef,
            status: decisionStatus,
            decision_title: createDecisionFormContent.decisionTitleRef,
            paragraph_details: createDecisionFormContent.paragraphDetailsRef,
            paragraph_impact: createDecisionFormContent.paragraphImpactRef,
            paragraph_benefits: createDecisionFormContent.paragraphBenefitsRef,
            paragraph_risks: createDecisionFormContent.paragraphRisksRef,
            paragraph_first_decision:
              createDecisionFormContent.paragraphFirstDecisionRef,
            paragraph_finale_decision:
              createDecisionFormContent.paragraphFinaleDecisionRef,
            user_id: user[0].user_id,
            experts: createDecisionFormExperts,
            impacted: createDecisionFormImpacted,
          }),
        }
      );

      // Redirection vers la page de connexion si la création réussit
      if (response.status === 201) {
        navigate("/homepage");
      } else {
        // Log des détails de la réponse en cas d'échec
        console.info(response);
      }
    } catch (err) {
      // Log des erreurs possibles
      console.error("Error in decision creation", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="createDecision__main">
      <CreateDecisionFormContent
        setCreateDecisionFormContent={setCreateDecisionFormContent}
      />
      <section className="createDecision__sections">
        <CreateDecisionFormExperts
          setCreateDecisionFormExperts={setCreateDecisionFormExperts}
        />
        <CreateDecisionFormImpacted
          setCreateDecisionFormImpacted={setCreateDecisionFormImpacted}
        />
        <button type="submit" className="createDecisionForm__button">
          Publier
        </button>
      </section>
    </form>
  );
}

export default CreateDecision;
