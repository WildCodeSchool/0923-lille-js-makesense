import "./DescriptionBox.scss";
import "../../assets/image/user-pen.png";
import { useState } from "react";

function DescriptionBox() {
  const [isCollapsedDetails, setIsCollapsedDetails] = useState();
  const [isCollapsedImpact, setIsCollapsedImpact] = useState();
  const [isCollapsedBenefits, setIsCollapsedBenefits] = useState();
  const [isCollapsedHazards, setIsCollapsedHazards] = useState();
  const [isCollapsedFirstDecision, setIsCollapsedFirstDecision] = useState();

  return (
    <section className="descriptionBox">
      <section className="descriptionBox__scroll">
        <header className="descriptionBox__header">
          <img src="../../assets/image/user-pen.png" alt="edit_post" />
          <img
            className="descriptionBox__header--avatar"
            src="src/assets/vincent.png"
            alt="avatar de l'auteur du poste"
          />
          <section className="descriptionBox__header--right">
            <h1 className="descriptionBox__header__right--title">
              Titre de la décision sur toute la zone très lisible
            </h1>
            <p className="descriptionBox__header__right--writer">
              par Vincent Rousseaux
            </p>
            <span className="decision__beans">
              <span className="decision__status">en cours</span>
              <span className="decision__location">Lille</span>
              <span className="decision__advices">4 avis</span>
            </span>
          </section>
        </header>

        <section className="descriptionBox__body--paragraphs">
          <button
            type="button"
            onClick={() => setIsCollapsedDetails(!isCollapsedDetails)}
          >
            <h2 className="title__paragraph">
              {isCollapsedDetails ? "➕" : "➖"} Détails de la décision
            </h2>
          </button>
          <hr className="dividing__line" />
          <article
            className={`descriptionBox__body--details ${
              isCollapsedDetails ? "collapsed" : "expanded"
            }`}
          >
            <p className="descriptionBox__body--text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              aperiam, ipsa enim beatae velit doloremque molestiae aspernatur
              maiores sit tenetur repellat nulla deserunt dolorum eveniet
              exercitationem ex aliquam earum excepturi! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Quaerat, natus doloremque
              numquam aspernatur eveniet suscipit fuga atque. Corrupti, vitae
              nulla dicta id alias a repellat labore enim veniam, aperiam magni!
            </p>
          </article>
          <button
            type="button"
            onClick={() => setIsCollapsedImpact(!isCollapsedImpact)}
          >
            <h2 className="title__paragraph">
              {isCollapsedImpact ? "➖" : "➕"} Impact sur l'organisation
            </h2>
          </button>
          <hr className="dividing__line" />
          <article
            className={`descriptionBox__body--impact ${
              isCollapsedImpact ? "expanded" : "collapsed"
            }`}
          >
            <p className="descriptionBox__body--text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              aperiam, ipsa enim beatae velit doloremque molestiae aspernatur
              maiores sit tenetur repellat nulla deserunt dolorum eveniet
              exercitationem ex aliquam earum excepturi! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Quaerat, natus doloremque
              numquam aspernatur eveniet suscipit fuga atque. Corrupti, vitae
              nulla dicta id alias a repellat labore enim veniam, aperiam magni!
            </p>
          </article>
          <button
            type="button"
            onClick={() => setIsCollapsedBenefits(!isCollapsedBenefits)}
          >
            <h2 className="title__paragraph">
              {isCollapsedBenefits ? "➖" : "➕"} Bénéfices
            </h2>
          </button>
          <hr className="dividing__line" />
          <article
            className={`descriptionBox__body--benefits ${
              isCollapsedBenefits ? "expanded" : "collapsed"
            }`}
          >
            <p className="descriptionBox__body--text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              aperiam, ipsa enim beatae velit doloremque molestiae aspernatur
              maiores sit tenetur repellat nulla deserunt dolorum eveniet
              exercitationem ex aliquam earum excepturi! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Quaerat, natus doloremque
              numquam aspernatur eveniet suscipit fuga atque. Corrupti, vitae
              nulla dicta id alias a repellat labore enim veniam, aperiam magni!
            </p>
          </article>
          <button
            type="button"
            onClick={() => setIsCollapsedHazards(!isCollapsedHazards)}
          >
            <h2 className="title__paragraph">
              {isCollapsedHazards ? "➖" : "➕"} Risques potentiels
            </h2>
          </button>
          <hr className="dividing__line" />
          <article
            className={`descriptionBox__body--hazards ${
              isCollapsedHazards ? "expanded" : "collapsed"
            }`}
          >
            <p className="descriptionBox__body--text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              aperiam, ipsa enim beatae velit doloremque molestiae aspernatur
              maiores sit tenetur repellat nulla deserunt dolorum eveniet
              exercitationem ex aliquam earum excepturi! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Quaerat, natus doloremque
              numquam aspernatur eveniet suscipit fuga atque. Corrupti, vitae
              nulla dicta id alias a repellat labore enim veniam, aperiam magni!
            </p>
          </article>
          <button
            type="button"
            onClick={() =>
              setIsCollapsedFirstDecision(!isCollapsedFirstDecision)
            }
          >
            <h2 className="title__paragraph">
              {isCollapsedFirstDecision ? "➖" : "➕"} Première décision prise
            </h2>
          </button>
          <hr className="dividing__line" />
          <article
            className={`descriptionBox__body--firstDecision ${
              isCollapsedFirstDecision ? "expanded" : "collapsed"
            }`}
          >
            <p className="descriptionBox__body--text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              aperiam, ipsa enim beatae velit doloremque molestiae aspernatur
              maiores sit tenetur repellat nulla deserunt dolorum eveniet
              exercitationem ex aliquam earum excepturi! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Quaerat, natus doloremque
              numquam aspernatur eveniet suscipit fuga atque. Corrupti, vitae
              nulla dicta id alias a repellat labore enim veniam, aperiam magni!
            </p>
          </article>
        </section>
      </section>
    </section>
  );
}
export default DescriptionBox;
