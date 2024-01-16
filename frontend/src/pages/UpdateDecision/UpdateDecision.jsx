import UpdateCreateDecisionFormImpacted from "../../components/UpdateCreateDecisionForm/UpdateCreateDecisionFormImpacted";
import UpdateCreateDecisionFormExperts from "../../components/UpdateCreateDecisionForm/UpdateCreateDecisionFormExperts";
import UpdateCreateDecisionFormContent from "../../components/UpdateCreateDecisionForm/UpdateCreateDecisionFormContent";
import "./UpdateDecision.scss";

function CreateDecision() {
  return (
    <main className="createDecision__main">
      <UpdateCreateDecisionFormContent />
      <aside className="createDecision__aside">
        <UpdateCreateDecisionFormExperts />
        <UpdateCreateDecisionFormImpacted />
        <button type="button" className="createDecisionForm__button">
          Publier
        </button>
      </aside>
    </main>
  );
}

export default CreateDecision;
