import PropTypes from "prop-types";
import "./UpdateCreateDecisionForm.scss";

function UpdateCreateDecisionFormContent({
  editedDecisions,
  setEditedDecisions,
}) {
  return (
    editedDecisions && (
      <main>
        <form className="updateDecisionForm__content updateDecisionForm__content--decision">
          <label className="updateDecisionForm__label" htmlFor="titre">
            Titre :
            <input
              type="text"
              name="titre"
              placeholder="Titre..."
              className="updateDecisionForm__input"
              required
              value={editedDecisions.decision_title}
              onChange={(e) =>
                setEditedDecisions((prevEditedDecisions) => ({
                  ...prevEditedDecisions,
                  decision_title: e.target.value,
                }))
              }
            />
          </label>
          <label className="updateDecisionForm__status" htmlFor="status">
            Délai :&nbsp;&nbsp;
            <select
              name="status"
              id="status"
              value={editedDecisions.decision_delay}
              onChange={(e) =>
                setEditedDecisions((prevEditedDecisions) => ({
                  ...prevEditedDecisions,
                  decision_delay: e.target.value,
                }))
              }
            >
              <option value="Court terme (deux semaines)">
                Court terme (deux semaines)
              </option>
              <option value="Moyen terme (un mois)">
                Moyen terme (un mois)
              </option>
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
              value={editedDecisions.status}
              onChange={(e) =>
                setEditedDecisions((prevEditedDecisions) => ({
                  ...prevEditedDecisions,
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

          <label className="updateDecisionForm__label" htmlFor="section1">
            Détails de la décision :
          </label>
          <textarea
            id="section1"
            name="section1"
            placeholder="Expliquez l'idée derrière votre proposition."
            className="updateDecisionForm__input"
            required
            rows={10}
            value={editedDecisions.paragraph_details}
            onChange={(e) =>
              setEditedDecisions((prevEditedDecisions) => ({
                ...prevEditedDecisions,
                paragraph_details: e.target.value,
              }))
            }
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
            rows={10}
            value={editedDecisions.paragraph_impact}
            onChange={(e) =>
              setEditedDecisions((prevEditedDecisions) => ({
                ...prevEditedDecisions,
                paragraph_impact: e.target.value,
              }))
            }
          />
          <label className="updateDecisionForm__label" htmlFor="section3">
            Bénéfices :
          </label>
          <textarea
            id="section3"
            name="section3"
            placeholder="Quels sont les bénéfices pour Make Sense ?"
            className="updateDecisionForm__input"
            rows={10}
            value={editedDecisions.paragraph_benefits}
            onChange={(e) =>
              setEditedDecisions((prevEditedDecisions) => ({
                ...prevEditedDecisions,
                paragraph_benefits: e.target.value,
              }))
            }
          />
          <label className="updateDecisionForm__label" htmlFor="section4">
            Risques potentiels :
          </label>
          <textarea
            id="section4"
            name="section4"
            placeholder="Quels sont les risques encourus par Make Sense vis à vis de cette décision ?"
            className="updateDecisionForm__input"
            rows={10}
            value={editedDecisions.paragraph_risks}
            onChange={(e) =>
              setEditedDecisions((prevEditedDecisions) => ({
                ...prevEditedDecisions,
                paragraph_risks: e.target.value,
              }))
            }
          />
          <label className="updateDecisionForm__label" htmlFor="section5">
            Première décision :
          </label>
          <textarea
            id="section5"
            name="section5"
            placeholder="/!\ Nécéssite un premier cycle de réflexion avec vos experts et impactés."
            className="updateDecisionForm__input"
            rows={10}
            value={editedDecisions.paragraph_first_decision}
            onChange={(e) =>
              setEditedDecisions((prevEditedDecisions) => ({
                ...prevEditedDecisions,
                paragraph_first_decision: e.target.value,
              }))
            }
          />
          <label className="updateDecisionForm__label" htmlFor="section6">
            Décision définitive :
          </label>
          <textarea
            id="section6"
            name="section6"
            placeholder="/!\ Nécéssite deux cycles de réflexion avec vos experts et impactés."
            className="updateDecisionForm__input"
            rows={10}
            value={editedDecisions.paragraph_finale_decision}
            onChange={(e) =>
              setEditedDecisions((prevEditedDecisions) => ({
                ...prevEditedDecisions,
                paragraph_finale_decision: e.target.value,
              }))
            }
          />
        </form>
      </main>
    )
  );
}

UpdateCreateDecisionFormContent.propTypes = {
  editedDecisions: PropTypes.arrayOf(
    PropTypes.shape({
      decision_title: PropTypes.string.isRequired,
      decision_delay: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      paragraph_benefits: PropTypes.string.isRequired,
      paragraph_details: PropTypes.string.isRequired,
      paragraph_finale_decision: PropTypes.string.isRequired,
      paragraph_first_decision: PropTypes.string.isRequired,
      paragraph_impact: PropTypes.string.isRequired,
      paragraph_risks: PropTypes.string.isRequired,
    })
  ).isRequired,
  setEditedDecisions: PropTypes.func.isRequired,
};
export default UpdateCreateDecisionFormContent;
