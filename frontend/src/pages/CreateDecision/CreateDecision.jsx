import CreateDecisionFormContent from "../../components/CreateDecisionForm/CreateDecisionFormContent";
import CreateDecisionFormExperts from "../../components/CreateDecisionForm/CreateDecisionFormExperts";
import CreateDecisionFormImpacted from "../../components/CreateDecisionForm/CreateDecisionFormImpacted";
import "./CreateDecision.scss";

function CreateDecision() {
  return (
    <main className="createDecision__main">
      <CreateDecisionFormContent />
      <section className="createDecision__sections">
        <CreateDecisionFormExperts />
        <CreateDecisionFormImpacted />
        <button type="button" className="createDecisionForm__button">
          Publier
        </button>
      </section>
    </main>
  );
}

export default CreateDecision;
