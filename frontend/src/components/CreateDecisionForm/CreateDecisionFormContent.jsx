import "./CreateDecisionForm.scss";

function CreateDecisionFormContent() {
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
        />
      </label>
      <label className="createDecisionForm__status" htmlFor="status">
        Délai :&nbsp;&nbsp;
        <select name="status" id="status">
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
      />
      <label className="createDecisionForm__label" htmlFor="section3">
        Bénéfices :
      </label>
      <textarea
        id="section3"
        name="section3"
        placeholder="Quels sont les bénéfices pour Make Sense ?"
        className="createDecisionForm__input"
      />
      <label className="createDecisionForm__label" htmlFor="section4">
        Risques potentiels :
      </label>
      <textarea
        id="section4"
        name="section4"
        placeholder="Quels sont les risques encourus par Make Sense vis à vis de cette décision ?"
        className="createDecisionForm__input"
      />
      <label className="createDecisionForm__label" htmlFor="section5">
        Première décision :
      </label>
      <textarea
        id="section5"
        name="section5"
        placeholder="/!\ Nécéssite un premier cycle de réflexion avec vos experts et impactés."
        className="createDecisionForm__input"
      />
      <label className="createDecisionForm__label" htmlFor="section6">
        Décision définitive :
      </label>
      <textarea
        id="section6"
        name="section6"
        placeholder="/!\ Nécéssite deux cycles de réflexion avec vos experts et impactés."
        className="createDecisionForm__input"
      />
    </form>
  );
}

export default CreateDecisionFormContent;
