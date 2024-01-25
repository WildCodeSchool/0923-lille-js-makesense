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
    <article className="updateDecisionForm__impacted">
      <h2 className="updateDecisionForm__titles">Impacté·e·s</h2>
      <span className="updateDecisionForm__content updateDecisionForm__content--choiceBoxes">
        <ul className="updateDecisionForm__list">
          {updateImpacted.map((updateImpacteds) => (
            <li className="updateDecisionForm__chosen">
              <img
                src={updateImpacted.picture}
                alt="avatar de la personne impactée choisie"
                className="updateDecisionForm__chosen--avatar"
              />
              <p className="updateDeicisionForm__chosen--fullname">
                {updateImpacteds.firstname} {updateImpacteds.lastname}
              </p>
            </li>
          ))}
        </ul>
        <form className="updateDecisionForm__search">
          <input
            className="updateDecisionForm__input"
            type="text"
            placeholder="Rechercher impacté·e·s"
          />
          <button className="updateDecisionForm__submit" type="submit">
            Choisir
          </button>
        </form>
      </span>
    </article>
  );
}

export default UpdateCreateDecisionFormImpacted;
