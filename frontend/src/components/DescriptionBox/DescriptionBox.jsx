import "./DescriptionBox.scss";
import { useState } from "react";

function DescriptionBox() {
  const [isCollapsed, setIsCollapsed] = useState();
  return (
    <>
      <h4>Date d'ouverture: 00/00/2023</h4>
      <h4>Date de cloture: 00/00/2024</h4>
      <div className="descriptionBox">
        <header className="descriptionBox__header">
          <img
            className="descriptionBox__header--avatar"
            src="src/assets/vincent.png"
            alt="avatar de l'auteur du poste"
          />
          <div className="descriptionBox__header__right">
            <h2 className="descriptionBox__header__right--title">
              Titre de la décision sur toute la zone très lisible
            </h2>
            <p className="descriptionBox__header__right--writer">
              par Vincent Rousseaux
            </p>
          </div>
        </header>
        <body>
          <button
            type="button"
            className="collapse-button"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            <h4>{isCollapsed ? "➖" : "➕"} Détails de la décision</h4>
          </button>
          <div
            className={`descriptionBox__body--details ${
              isCollapsed ? "expanded" : "collapsed"
            }`}
            aria-expanded={isCollapsed}
          >
            <div className="">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                aperiam, ipsa enim beatae velit doloremque molestiae aspernatur
                maiores sit tenetur repellat nulla deserunt dolorum eveniet
                exercitationem ex aliquam earum excepturi!
              </p>
            </div>
          </div>
        </body>
      </div>
    </>
  );
}
export default DescriptionBox;
