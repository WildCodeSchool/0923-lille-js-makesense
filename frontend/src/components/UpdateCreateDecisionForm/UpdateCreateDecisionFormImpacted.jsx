import "./UpdateCreateDecisionForm.scss";
import { mockUser } from "../../mockData";

function UpdateCreateDecisionFormImpacted() {
  return (
    <article className="createDecisionForm__impacted">
      <h2 className="createDecisionForm__titles">Impacté·e·s</h2>
      <span className="createDecisionForm__content createDecisionForm__content--choiceBoxes">
        <ul className="createDecisionForm__list">
          <li className="createDecisionForm__chosen">
            <img
              src={mockUser[2].picture}
              alt="avatar de la personne impactée choisie"
              className="createDecisionForm__chosen--avatar"
            />
            <p className="createDeicisionForm__chosen--fullname">
              {mockUser[2].firstname} {mockUser[2].lastname}
            </p>
          </li>
          <li className="createDecisionForm__chosen">
            <img
              src={mockUser[2].picture}
              alt="avatar de la personne impactée choisie"
              className="createDecisionForm__chosen--avatar"
            />
            <p className="createDeicisionForm__chosen--fullname">
              {mockUser[2].firstname} {mockUser[2].lastname}
            </p>
          </li>
        </ul>
        <form className="createDecisionForm__search">
          <input
            className="createDecisionForm__input"
            type="text"
            placeholder="Rechercher impacté·e·s"
          />
          <button className="createDecisionForm__submit" type="submit">
            Choisir
          </button>
        </form>
      </span>
    </article>
  );
}

export default UpdateCreateDecisionFormImpacted;
