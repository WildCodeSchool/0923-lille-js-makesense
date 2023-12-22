import "./CreateDecisionForm.scss";
import { mockUser } from "../../mockData";

function CreateDecisionFormExperts() {
  return (
    <article className="createDecisionForm__experts">
      <h2 className="createDecisionForm__titles">Experts</h2>
      <span className="createDecisionForm__content">
        <ul className="createDecisionForm__list">
          <li className="createDecisionForm__chosen">
            <img
              src={mockUser[0].picture}
              alt="avatar de l'expert choisi"
              className="createDecisionForm__chosen--avatar"
            />
            <p className="createDeicisionForm__chosen--fullname">
              {mockUser[0].firstname} {mockUser[0].lastname}
            </p>
          </li>
          <li className="createDecisionForm__chosen">
            <img
              src={mockUser[1].picture}
              alt="avatar de l'expert choisi"
              className="createDecisionForm__chosen--avatar"
            />
            <p className="createDeicisionForm__chosen--fullname">
              {mockUser[1].firstname} {mockUser[1].lastname}
            </p>
          </li>
        </ul>
        <form className="createDecisionForm__search">
          <input
            className="createDecisionForm__input"
            type="text"
            placeholder="Rechercher expert.e.s"
          />
          <button type="submit">Choisir</button>
        </form>
      </span>
    </article>
  );
}

export default CreateDecisionFormExperts;
