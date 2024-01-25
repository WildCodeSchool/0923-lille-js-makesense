import "./UpdateCreateDecisionForm.scss";
import { useEffect, useState } from "react";
import { useDecisionContext } from "../../contexts/decisionContext";

function UpdateCreateDecisionFormExperts() {
  const { decisionId } = useDecisionContext();

  const [updateExperts, setUpdateExperts] = useState([]);

  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/decisions/${decisionId}/experts`
    )
      .then((response) => response.json())
      .then((data) => setUpdateExperts(data))
      .catch((error) => console.error(error));
  }, [decisionId]);

  return (
    <article className="updateDecisionForm__experts">
      <h2 className="updateDecisionForm__titles">Expert·e·s</h2>
      <span className="updateDecisionForm__content updateDecisionForm__content--choiceBoxes">
        <ul className="updateDecisionForm__list">
          {updateExperts.map((updateExpert) => (
            <li className="updateDecisionForm__chosen">
              <img
                src={updateExpert.picture}
                alt="avatar de l'expert choisi"
                className="updateDecisionForm__chosen--avatar"
              />
              <p className="updateDecisionForm__chosen--fullname">
                {updateExpert.firstname} {updateExpert.lastname}
              </p>
            </li>
          ))}
        </ul>
        <form className="updateDecisionForm__search">
          <input
            className="updateDecisionForm__input"
            type="text"
            placeholder="Rechercher expert·e·s"
          />
          <button className="updateDecisionForm__submit" type="submit">
            Choisir
          </button>
        </form>
      </span>
    </article>
  );
}

export default UpdateCreateDecisionFormExperts;
