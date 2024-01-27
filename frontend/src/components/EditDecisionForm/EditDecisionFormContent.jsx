import React from "react";
import PropTypes from "prop-types";
import "./EditDecisionForm.scss";

function EditDecisionFormContent({ decisionContent, setDecisionContent }) {
  return (
    <main>
      <form className="editDecisionForm__content editDecisionForm__content--decision">
        <label className="editDecisionForm__label" htmlFor="titre">
          Titre :
          <input
            type="text"
            name="titre"
            placeholder="Titre..."
            className="editDecisionForm__input"
            required
            value={decisionContent.decision_title}
            onChange={(e) =>
              setDecisionContent((prevDecisions) => ({
                ...prevDecisions,
                decision_title: e.target.value,
              }))
            }
          />
        </label>
        <label className="editDecisionForm__status" htmlFor="status">
          Délai :&nbsp;&nbsp;
          <select
            name="status"
            id="status"
            value={decisionContent.decision_delay}
            onChange={(e) =>
              setDecisionContent((prevDecisions) => ({
                ...prevDecisions,
                decision_delay: e.target.value,
              }))
            }
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

        <label className="editDecisionForm__status" htmlFor="progress">
          Progression :&nbsp;&nbsp;
          <select
            name="progress"
            id="status"
            value={decisionContent.status}
            onChange={(e) =>
              setDecisionContent((prevDecisions) => ({
                ...prevDecisions,
                status: e.target.value,
              }))
            }
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

        {/* Common form fields */}
        <label className="editDecisionForm__label" htmlFor="section1">
          Détails de la décision :
        </label>
        <textarea
          id="section1"
          name="section1"
          placeholder="Expliquez l'idée derrière votre proposition."
          className="editDecisionForm__input"
          required
          rows={20}
          value={decisionContent.paragraph_details}
          onChange={(e) =>
            setDecisionContent((prevDecisions) => ({
              ...prevDecisions,
              paragraph_details: e.target.value,
            }))
          }
        />

        <label className="editDecisionForm__label" htmlFor="section2">
          Impact sur l'organisation :
        </label>
        <textarea
          id="section2"
          name="section2"
          placeholder="En quoi Make Sense sera impacté par cette décision ?"
          className="editDecisionForm__input"
          required
          rows={20}
          value={decisionContent.paragraph_impact}
          onChange={(e) =>
            setDecisionContent((prevDecisions) => ({
              ...prevDecisions,
              paragraph_impact: e.target.value,
            }))
          }
        />

        <label className="editDecisionForm__label" htmlFor="section3">
          Bénéfices :
        </label>
        <textarea
          id="section3"
          name="section3"
          placeholder="Quels sont les bénéfices pour Make Sense ?"
          className="editDecisionForm__input"
          rows={20}
          value={decisionContent.paragraph_benefits}
          onChange={(e) =>
            setDecisionContent((prevDecisions) => ({
              ...prevDecisions,
              paragraph_benefits: e.target.value,
            }))
          }
        />

        <label className="editDecisionForm__label" htmlFor="section4">
          Risques potentiels :
        </label>
        <textarea
          id="section4"
          name="section4"
          placeholder="Quels sont les risques encourus par Make Sense vis à vis de cette décision ?"
          className="editDecisionForm__input"
          value={decisionContent.paragraph_risks}
          onChange={(e) =>
            setDecisionContent((prevDecisions) => ({
              ...prevDecisions,
              paragraph_risks: e.target.value,
            }))
          }
        />

        <label className="editDecisionForm__label" htmlFor="section5">
          Première décision :
        </label>
        <textarea
          id="section5"
          name="section5"
          placeholder="/!\ Nécessite un premier cycle de réflexion avec vos experts et impactés."
          className="editDecisionForm__input"
          value={decisionContent.paragraph_first_decision}
          onChange={(e) =>
            setDecisionContent((prevDecisions) => ({
              ...prevDecisions,
              paragraph_first_decision: e.target.value,
            }))
          }
        />

        <label className="editDecisionForm__label" htmlFor="section6">
          Décision définitive :
        </label>
        <textarea
          id="section6"
          name="section6"
          placeholder="/!\ Nécessite deux cycles de réflexion avec vos experts et impactés."
          className="editDecisionForm__input"
          value={decisionContent.paragraph_finale_decision}
          onChange={(e) =>
            setDecisionContent((prevDecisions) => ({
              ...prevDecisions,
              paragraph_finale_decision: e.target.value,
            }))
          }
        />
      </form>
    </main>
  );
}

EditDecisionFormContent.propTypes = {
  decisionContent: PropTypes.shape({
    decision_title: PropTypes.string.isRequired,
    decision_delay: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    paragraph_benefits: PropTypes.string.isRequired,
    paragraph_details: PropTypes.string.isRequired,
    paragraph_finale_decision: PropTypes.string.isRequired,
    paragraph_first_decision: PropTypes.string.isRequired,
    paragraph_impact: PropTypes.string.isRequired,
    paragraph_risks: PropTypes.string.isRequired,
  }).isRequired,
  setDecisionContent: PropTypes.func.isRequired,
};

export default EditDecisionFormContent;
