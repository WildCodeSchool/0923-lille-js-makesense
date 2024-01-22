import { useState } from "react";
import "./UpdateCreateDecisionForm.scss";
import PropTypes from "prop-types";

function UpdateCreateDecisionFormContent({
  title,
  details,
  impact,
  benefits,
  risks,
  firstDecision,
  finalDecision,
}) {
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectChange = (event) => {
    // Mettre à jour la variable d'état avec la valeur sélectionnée
    setSelectedValue(event.target.value);
  };
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
        />
      </label>
      <label className="createDecisionForm__status" htmlFor="status">
        Délai :&nbsp;&nbsp;
        <select
          name="status"
          id="status"
          value={selectedValue}
          onChange={handleSelectChange}
        >
          <option value="court">Court terme (deux semaines)</option>
          <option value="moyen">Moyen terme (Un mois)</option>
          <option value="long">Long terme (deux mois)</option>
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
      />
    </form>
  );
}

UpdateCreateDecisionFormContent.propTypes = {
  title: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  impact: PropTypes.string.isRequired,
  benefits: PropTypes.string.isRequired,
  risks: PropTypes.string.isRequired,
  firstDecision: PropTypes.string.isRequired,
  finalDecision: PropTypes.string.isRequired,
};
export default UpdateCreateDecisionFormContent;
