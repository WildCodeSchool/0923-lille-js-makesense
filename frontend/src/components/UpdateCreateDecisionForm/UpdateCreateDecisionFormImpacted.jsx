import "./UpdateCreateDecisionForm.scss";
import { useEffect, useState } from "react";
import { useDecisionContext } from "../../contexts/decisionContext";

function UpdateCreateDecisionFormImpacted() {
  const { decisionId } = useDecisionContext();

  const [updateImpacted, setUpdateImpacted] = useState([]);

  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/decisions/${decisionId}/impacted`
    )
      .then((response) => response.json())
      .then((data) => setUpdateImpacted(data))
      .catch((error) => console.error(error));
  }, [decisionId]);
  return (
    <article className="createDecisionForm__impacted">
      <h2 className="createDecisionForm__titles">Impacté·e·s</h2>
      <span className="createDecisionForm__content createDecisionForm__content--choiceBoxes">
        <ul className="createDecisionForm__list">
          {updateImpacted.map((updateImpacteds) => (
            <li className="createDecisionForm__chosen">
              <img
                src={updateImpacted.picture}
                alt="avatar de la personne impactée choisie"
                className="createDecisionForm__chosen--avatar"
              />
              <p className="createDeicisionForm__chosen--fullname">
                {updateImpacteds.firstname} {updateImpacteds.lastname}
              </p>
            </li>
          ))}
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
