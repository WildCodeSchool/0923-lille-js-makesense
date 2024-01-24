import "./UpdateCreateDecisionForm.scss";
import PropTypes from "prop-types";

function UpdateCreateDecisionFormContent({
  selectedValue,
  progress,
  title,
  details,
  impact,
  benefits,
  risks,
  firstDecision,
  finalDecision,
  setSelectedValue,
  setProgress,
  setTitle,
  setDetails,
  setImpact,
  setBenefits,
  setRisks,
  setFirstDecision,
  setFinalDecision,
}) {
  return (
    <form className="createDecisionForm__content createDecisionForm__content--decision">
      <label className="createDecisionForm__label" htmlFor="titre">
        Titre :&nbsp;&nbsp;
        <input
          type="text"
          name="titre"
          placeholder="Titre..."
          className="createDecisionForm__input"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label className="createDecisionForm__status" htmlFor="status">
        Délai :&nbsp;&nbsp;
        <select
          name="status"
          id="status"
          value={selectedValue}
          onChange={(e) => setSelectedValue(e.target.value)}
        >
          <option value="Court terme (deux semaines)">
            Court terme (deux semaines)
          </option>
          <option value="Moyen terme (un mois)">Moyen terme (un mois)</option>
          <option value="Long terme (deux mois)">Long terme (deux mois)</option>
        </select>
      </label>

      <label className="createDecisionForm__status" htmlFor="progress">
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
      <label className="createDecisionForm__label" htmlFor="section1">
        Détails de la décision :
      </label>
      <textarea
        id="section1"
        name="section1"
        placeholder="Expliquez l'idée derrière votre proposition."
        className="createDecisionForm__input"
        required
        value={details}
        onChange={(e) => setDetails(e.target.value)}
      />

      <label className="createDecisionForm__label" htmlFor="section2">
        Impact sur l'organisation :
      </label>
      <textarea
        id="section2"
        name="section2"
        placeholder="En quoi Make Sense sera impacté par cette décision ?"
        className="createDecisionForm__input"
        required
        value={impact}
        onChange={(e) => setImpact(e.target.value)}
      />
      <label className="createDecisionForm__label" htmlFor="section3">
        Bénéfices :
      </label>
      <textarea
        id="section3"
        name="section3"
        placeholder="Quels sont les bénéfices pour Make Sense ?"
        className="createDecisionForm__input"
        value={benefits}
        onChange={(e) => setBenefits(e.target.value)}
      />
      <label className="createDecisionForm__label" htmlFor="section4">
        Risques potentiels :
      </label>
      <textarea
        id="section4"
        name="section4"
        placeholder="Quels sont les risques encourus par Make Sense vis à vis de cette décision ?"
        className="createDecisionForm__input"
        value={risks}
        onChange={(e) => setRisks(e.target.value)}
      />
      <label className="createDecisionForm__label" htmlFor="section5">
        Première décision :
      </label>
      <textarea
        id="section5"
        name="section5"
        placeholder="/!\ Nécéssite un premier cycle de réflexion avec vos experts et impactés."
        className="createDecisionForm__input"
        value={firstDecision}
        onChange={(e) => setFirstDecision(e.target.value)}
      />
      <label className="createDecisionForm__label" htmlFor="section6">
        Décision définitive :
      </label>
      <textarea
        id="section6"
        name="section6"
        placeholder="/!\ Nécéssite deux cycles de réflexion avec vos experts et impactés."
        className="createDecisionForm__input"
        value={finalDecision}
        onChange={(e) => setFinalDecision(e.target.value)}
      />
    </form>
  );
}

UpdateCreateDecisionFormContent.propTypes = {
  progress: PropTypes.string.isRequired,
  selectedValue: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  impact: PropTypes.string.isRequired,
  benefits: PropTypes.string.isRequired,
  risks: PropTypes.string.isRequired,
  firstDecision: PropTypes.string.isRequired,
  finalDecision: PropTypes.string.isRequired,
  setSelectedValue: PropTypes.func.isRequired,
  setProgress: PropTypes.func.isRequired,
  setTitle: PropTypes.func.isRequired,
  setDetails: PropTypes.func.isRequired,
  setImpact: PropTypes.func.isRequired,
  setBenefits: PropTypes.func.isRequired,
  setRisks: PropTypes.func.isRequired,
  setFirstDecision: PropTypes.func.isRequired,
  setFinalDecision: PropTypes.func.isRequired,
};
export default UpdateCreateDecisionFormContent;
