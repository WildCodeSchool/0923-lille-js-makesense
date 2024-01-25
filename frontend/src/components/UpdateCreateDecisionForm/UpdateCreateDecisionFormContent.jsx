import PropTypes from "prop-types";
import "./UpdateCreateDecisionForm.scss";

function UpdateCreateDecisionFormContent({
  delay,
  progress,
  title,
  details,
  impact,
  benefits,
  risks,
  firstDecision,
  finaleDecision,
  setDelay,
  setProgress,
  setTitle,
  setDetails,
  setImpact,
  setBenefits,
  setRisks,
  setFirstDecision,
  setFinaleDecision,
}) {
  return (
    <main>
      <form className="updateDecisionForm__content updateDecisionForm__content--decision">
        <label className="updateDecisionForm__label" htmlFor="titre">
          Titre :&nbsp;&nbsp;
          <input
            type="text"
            name="titre"
            placeholder="Titre..."
            className="updateDecisionForm__input"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label className="updateDecisionForm__status" htmlFor="status">
          Délai :&nbsp;&nbsp;
          <select
            name="status"
            id="status"
            value={delay}
            onChange={(e) => setDelay(e.target.value)}
          >
            <option value="Court terme (deux semaines)">
              Court terme (deux semaines)
            </option>
            <option value="Moyen terme (un mois)">Moyen terme (un mois)</option>
            <option value="Long terme (deux mois)">
              Long terme (deux mois)
            </option>
          </select>
        </label>

        <label className="updateDecisionForm__status" htmlFor="progress">
          Progression :&nbsp;&nbsp;
          <select
            name="progress"
            id="status"
            value={progress}
            onChange={(e) => setProgress(e.target.value)}
          >
            <option value="Décision commencée">Décision commencée</option>
            <option value="Première décision prise">
              Première décision prise
            </option>
            <option value="Décision définitive">Décision définitive</option>
            <option value="Décision non aboutie">Décision non aboutie</option>
            <option value="Décision terminée">Décision terminée</option>
            <option value="Conflit sur la décision">
              Conflit sur la décision
            </option>
          </select>
        </label>
        <label className="updateDecisionForm__label" htmlFor="section1">
          Détails de la décision :
        </label>
        <textarea
          id="section1"
          name="section1"
          placeholder="Expliquez l'idée derrière votre proposition."
          className="updateDecisionForm__input"
          required
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />

        <label className="updateDecisionForm__label" htmlFor="section2">
          Impact sur l'organisation :
        </label>
        <textarea
          id="section2"
          name="section2"
          placeholder="En quoi Make Sense sera impacté par cette décision ?"
          className="updateDecisionForm__input"
          required
          value={impact}
          onChange={(e) => setImpact(e.target.value)}
        />
        <label className="updateDecisionForm__label" htmlFor="section3">
          Bénéfices :
        </label>
        <textarea
          id="section3"
          name="section3"
          placeholder="Quels sont les bénéfices pour Make Sense ?"
          className="updateDecisionForm__input"
          value={benefits}
          onChange={(e) => setBenefits(e.target.value)}
        />
        <label className="updateDecisionForm__label" htmlFor="section4">
          Risques potentiels :
        </label>
        <textarea
          id="section4"
          name="section4"
          placeholder="Quels sont les risques encourus par Make Sense vis à vis de cette décision ?"
          className="updateDecisionForm__input"
          value={risks}
          onChange={(e) => setRisks(e.target.value)}
        />
        <label className="updateDecisionForm__label" htmlFor="section5">
          Première décision :
        </label>
        <textarea
          id="section5"
          name="section5"
          placeholder="/!\ Nécéssite un premier cycle de réflexion avec vos experts et impactés."
          className="updateDecisionForm__input"
          value={firstDecision}
          onChange={(e) => setFirstDecision(e.target.value)}
        />
        <label className="updateDecisionForm__label" htmlFor="section6">
          Décision définitive :
        </label>
        <textarea
          id="section6"
          name="section6"
          placeholder="/!\ Nécéssite deux cycles de réflexion avec vos experts et impactés."
          className="updateDecisionForm__input"
          value={finaleDecision}
          onChange={(e) => setFinaleDecision(e.target.value)}
        />
      </form>
    </main>
  );
}

UpdateCreateDecisionFormContent.propTypes = {
  progress: PropTypes.string.isRequired,
  delay: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  impact: PropTypes.string.isRequired,
  benefits: PropTypes.string.isRequired,
  risks: PropTypes.string.isRequired,
  firstDecision: PropTypes.string.isRequired,
  finaleDecision: PropTypes.string.isRequired,
  setDelay: PropTypes.func.isRequired,
  setProgress: PropTypes.func.isRequired,
  setTitle: PropTypes.func.isRequired,
  setDetails: PropTypes.func.isRequired,
  setImpact: PropTypes.func.isRequired,
  setBenefits: PropTypes.func.isRequired,
  setRisks: PropTypes.func.isRequired,
  setFirstDecision: PropTypes.func.isRequired,
  setFinaleDecision: PropTypes.func.isRequired,
};
export default UpdateCreateDecisionFormContent;
