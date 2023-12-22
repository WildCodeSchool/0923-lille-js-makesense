import "./CreateDecisionForm.scss";

function CreateDecisionFormContent() {
  return (
    <form className="createDecisionForm__content">
      <label className="createDecisionForm__status" htmlFor="status">
        Délai :
      </label>
      <select name="status" id="status">
        <option value="court">Court terme (deux semaines)</option>
        <option value="moyen">Moyen terme (Un mois)</option>
        <option value="long">Long terme (deux mois)</option>
      </select>
      <label className="createDecisionForm__label" htmlFor="titre">
        Titre
      </label>
      <input
        type="text"
        name="titre"
        placeholder="Titre..."
        className="createDecisionForm__input"
        required
      />
      <label className="createDecisionForm__label" htmlFor="section1">
        Détails de la décision :
      </label>
      <textarea
        id=""
        name="section1"
        placeholder="Expliquez l'idée dernière votre proposition."
        className="createDecisionForm__input"
        required
      />
      <label className="createDecisionForm__label" htmlFor="section2">
        Impact sur l'organisation :
      </label>
      <textarea
        id=""
        name="section2"
        placeholder="En quoi Make Sense sera impacté par cette décision ?"
        className="createDecisionForm__input"
        required
      />
      <label className="createDecisionForm__label" htmlFor="section3">
        Bénéfices :
      </label>
      <textarea
        id=""
        name="section3"
        placeholder="Quels sont les bénéfices pour Make Sense ?"
        className="createDecisionForm__input"
      />
      <label className="createDecisionForm__label" htmlFor="section4">
        Risques potentiels :
      </label>
      <textarea
        id=""
        name="section4"
        placeholder="Quels sont les risques encourus par Make Sense vis à vis de cette décision ?"
        className="createDecisionForm__input"
      />
      <label className="createDecisionForm__label" htmlFor="section5">
        Première décision :
      </label>
      <textarea
        id=""
        name="section5"
        placeholder="/!\ Nécéssite un premier cycle de réflexion avec vos experts et impactés."
        className="createDecisionForm__input"
      />
      <label className="createDecisionForm__label" htmlFor="section6">
        Décision définitive :
      </label>
      <textarea
        id=""
        name="section6"
        placeholder="/!\ Nécéssite deux cycles de réflexion avec vos experts et impactés."
        className="createDecisionForm__input"
      />
    </form>
  );
}

export default CreateDecisionFormContent;
