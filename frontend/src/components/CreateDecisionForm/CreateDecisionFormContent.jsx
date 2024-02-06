import { useRef } from "react";
import "./CreateDecisionForm.scss";
import PropTypes from "prop-types";

function CreateDecisionFormContent({ setCreateDecisionFormContent }) {
  const decisionDelayRef = useRef();
  const decisionTitleRef = useRef();
  const paragraphDetailsRef = useRef();
  const paragraphImpactRef = useRef();
  const paragraphBenefitsRef = useRef();
  const paragraphRisksRef = useRef();
  const paragraphFirstDecisionRef = useRef(null);
  const paragraphFinaleDecisionRef = useRef(null);

  const handleChange = () => {
    setCreateDecisionFormContent({
      decisionDelayRef: decisionDelayRef.current.value,
      decisionTitleRef: decisionTitleRef.current.value,
      paragraphDetailsRef: paragraphDetailsRef.current.value,
      paragraphImpactRef: paragraphImpactRef.current.value,
      paragraphBenefitsRef: paragraphBenefitsRef.current.value,
      paragraphRisksRef: paragraphRisksRef.current.value,
      paragraphFirstDecisionRef: paragraphFirstDecisionRef.current.value,
      paragraphFinaleDecisionRef: paragraphFinaleDecisionRef.current.value,
    });
  };

  return (
    <article
      onChange={handleChange}
      className="createDecisionForm__content createDecisionForm__content--decision"
    >
      <label className="createDecisionForm__label" htmlFor="titre">
        Titre :
        <input
          type="text"
          name="titre"
          placeholder="Titre..."
          className="createDecisionForm__input"
          required
          ref={decisionTitleRef}
        />
      </label>
      <label className="createDecisionForm__status" htmlFor="status">
        Délai :
        <select name="status" id="status" ref={decisionDelayRef}>
          <option value="Court terme (deux semaines)">
            Court terme (deux semaines)
          </option>
          <option value="Moyen terme (un mois)">Moyen terme (un mois)</option>
          <option value="Long terme (deux mois)">Long terme (deux mois)</option>
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
        ref={paragraphDetailsRef}
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
        ref={paragraphImpactRef}
      />
      <label className="createDecisionForm__label" htmlFor="section3">
        Bénéfices :
      </label>
      <textarea
        id="section3"
        name="section3"
        placeholder="Quels sont les bénéfices pour Make Sense ?"
        className="createDecisionForm__input"
        ref={paragraphBenefitsRef}
      />
      <label className="createDecisionForm__label" htmlFor="section4">
        Risques potentiels :
      </label>
      <textarea
        id="section4"
        name="section4"
        placeholder="Quels sont les risques encourus par Make Sense vis à vis de cette décision ?"
        className="createDecisionForm__input"
        ref={paragraphRisksRef}
      />
      <label className="createDecisionForm__label" htmlFor="section5">
        Première décision :
      </label>
      <textarea
        id="section5"
        name="section5"
        placeholder="⚠️ Nécessite un premier cycle de réflexion avec vos experts et impactés."
        className="createDecisionForm__input"
        ref={paragraphFirstDecisionRef}
        disabled
      />
      <label className="createDecisionForm__label" htmlFor="section6">
        Décision définitive :
      </label>
      <textarea
        id="section6"
        name="section6"
        placeholder="⚠️ Nécessite deux cycles de réflexion avec vos experts et impactés."
        className="createDecisionForm__input"
        ref={paragraphFinaleDecisionRef}
        disabled
      />
    </article>
  );
}

CreateDecisionFormContent.propTypes = {
  setCreateDecisionFormContent: PropTypes.func.isRequired,
};

export default CreateDecisionFormContent;
