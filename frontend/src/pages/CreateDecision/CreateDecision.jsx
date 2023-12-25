import CreateDecisionFormContent from "../../components/CreateDecisionForm/CreateDecisionFormContent";
import CreateDecisionFormExperts from "../../components/CreateDecisionForm/CreateDecisionFormExperts";
import CreateDecisionFormImpacted from "../../components/CreateDecisionForm/CreateDecisionFormImpacted";
import "./CreateDecision.scss";

function CreateDecision() {
  return (
    <main className="createDecision__main">
      <CreateDecisionFormContent />
      <aside className="createDecision__aside">
        <CreateDecisionFormExperts />
        <CreateDecisionFormImpacted />
        <button type="submit" className="createDecisionForm__button">
          Publier
        </button>
      </aside>
    </main>
  );
}

export default CreateDecision;
