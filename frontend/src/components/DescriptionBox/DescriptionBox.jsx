import "./DescriptionBox.scss";
import { useState } from "react";

function DescriptionBox() {
  const [isCollapsedDetails, setIsCollapsedDetails] = useState();
  const [isCollapsedImpact, setIsCollapsedImpact] = useState();
  const [isCollapsedBenefits, setIsCollapsedBenefits] = useState();
  const [isCollapsedHazards, setIsCollapsedHazards] = useState();
  const [isCollapsedStDecision, setIsCollapsedStDecision] = useState();

  return (
    <>
      <h4>
        Date d'ouverture: 00/00/2023 <br />
        Date de cloture: 00/00/2024
      </h4>
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
          <div className="descriptionBox__body--paragraphs">
            <button
              type="button"
              className="collapse__button"
              onClick={() => setIsCollapsedDetails(!isCollapsedDetails)}
            >
              <h4>{isCollapsedDetails ? "➖" : "➕"} Détails de la décision</h4>
            </button>
            <hr />
            <div
              className={`descriptionBox__body--details ${
                isCollapsedDetails ? "expanded" : "collapsed"
              }`}
              aria-expanded={isCollapsedDetails}
            >
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                aperiam, ipsa enim beatae velit doloremque molestiae aspernatur
                maiores sit tenetur repellat nulla deserunt dolorum eveniet
                exercitationem ex aliquam earum excepturi! Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Quaerat, natus doloremque
                numquam aspernatur eveniet suscipit fuga atque. Corrupti, vitae
                nulla dicta id alias a repellat labore enim veniam, aperiam
                magni!
              </p>
            </div>
            <button
              type="button"
              className="collapse__button"
              onClick={() => setIsCollapsedImpact(!isCollapsedImpact)}
            >
              <h4>
                {isCollapsedImpact ? "➖" : "➕"} Impact sur l'organisation
              </h4>
            </button>
            <hr />
            <div
              className={`descriptionBox__body--impact ${
                isCollapsedImpact ? "expanded" : "collapsed"
              }`}
              aria-expanded={isCollapsedImpact}
            >
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                aperiam, ipsa enim beatae velit doloremque molestiae aspernatur
                maiores sit tenetur repellat nulla deserunt dolorum eveniet
                exercitationem ex aliquam earum excepturi! Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Quaerat, natus doloremque
                numquam aspernatur eveniet suscipit fuga atque. Corrupti, vitae
                nulla dicta id alias a repellat labore enim veniam, aperiam
                magni!
              </p>
            </div>
            <button
              type="button"
              className="collapse__button"
              onClick={() => setIsCollapsedBenefits(!isCollapsedBenefits)}
            >
              <h4>{isCollapsedBenefits ? "➖" : "➕"} Bénéfices</h4>
            </button>
            <hr />
            <div
              className={`descriptionBox__body--benefits ${
                isCollapsedBenefits ? "expanded" : "collapsed"
              }`}
              aria-expanded={isCollapsedBenefits}
            >
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                aperiam, ipsa enim beatae velit doloremque molestiae aspernatur
                maiores sit tenetur repellat nulla deserunt dolorum eveniet
                exercitationem ex aliquam earum excepturi! Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Quaerat, natus doloremque
                numquam aspernatur eveniet suscipit fuga atque. Corrupti, vitae
                nulla dicta id alias a repellat labore enim veniam, aperiam
                magni!
              </p>
            </div>
            <button
              type="button"
              className="collapse__button"
              onClick={() => setIsCollapsedHazards(!isCollapsedHazards)}
            >
              <h4>{isCollapsedHazards ? "➖" : "➕"} Risques potentiels</h4>
            </button>
            <hr />
            <div
              className={`descriptionBox__body--hazards ${
                isCollapsedHazards ? "expanded" : "collapsed"
              }`}
              aria-expanded={isCollapsedHazards}
            >
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                aperiam, ipsa enim beatae velit doloremque molestiae aspernatur
                maiores sit tenetur repellat nulla deserunt dolorum eveniet
                exercitationem ex aliquam earum excepturi! Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Quaerat, natus doloremque
                numquam aspernatur eveniet suscipit fuga atque. Corrupti, vitae
                nulla dicta id alias a repellat labore enim veniam, aperiam
                magni!
              </p>
            </div>
            <button
              type="button"
              className="collapse__button"
              onClick={() => setIsCollapsedStDecision(!isCollapsedStDecision)}
            >
              <h4>
                {isCollapsedStDecision ? "➖" : "➕"} Première décision prise
              </h4>
            </button>
            <hr />
            <div
              className={`descriptionBox__body--firstDecision ${
                isCollapsedStDecision ? "expanded" : "collapsed"
              }`}
              aria-expanded={isCollapsedStDecision}
            >
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                aperiam, ipsa enim beatae velit doloremque molestiae aspernatur
                maiores sit tenetur repellat nulla deserunt dolorum eveniet
                exercitationem ex aliquam earum excepturi! Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Quaerat, natus doloremque
                numquam aspernatur eveniet suscipit fuga atque. Corrupti, vitae
                nulla dicta id alias a repellat labore enim veniam, aperiam
                magni!
              </p>
            </div>
          </div>
        </body>
      </div>
    </>
  );
}
export default DescriptionBox;
