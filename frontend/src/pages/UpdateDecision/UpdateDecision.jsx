import CreateDecisionFormContent from "../../components/CreateDecisionForm/CreateDecisionFormContent";
import CreateDecisionFormExperts from "../../components/CreateDecisionForm/CreateDecisionFormExperts";
import CreateDecisionFormImpacted from "../../components/CreateDecisionForm/CreateDecisionFormImpacted";
import "./UpdateDecision.scss";

function UpdateDecision() {
  return (
    <main className="createDecision__main">
      <CreateDecisionFormContent />
      <aside className="createDecision__aside">
        <CreateDecisionFormExperts />
        <CreateDecisionFormImpacted />
        <button type="button" className="createDecisionForm__button">
          Mettre à jour
        </button>
      </aside>
    </main>
  );
}

export default UpdateDecision;
