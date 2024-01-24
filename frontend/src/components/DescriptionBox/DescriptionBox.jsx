import "./DescriptionBox.scss";
import { useState } from "react";
import PropTypes from "prop-types";
import EditButton from "../EditButton/EditButton";

function DescriptionBox({
  title,
  status,
  location,
  comments,
  picture,
  firstname,
  lastname,
  paragraphDetails,
  paragraphImpact,
  paragraphBenefits,
  paragraphRisks,
  paragraphFirstDecision,
  paragraphFinaleDecision,
}) {
  const [isCollapsedDetails, setIsCollapsedDetails] = useState();
  const [isCollapsedImpact, setIsCollapsedImpact] = useState();
  const [isCollapsedBenefits, setIsCollapsedBenefits] = useState();
  const [isCollapsedHazards, setIsCollapsedHazards] = useState();
  const [isCollapsedFirstDecision, setIsCollapsedFirstDecision] = useState();
  const [isCollapsedFinaleDecision, setIsCollapsedFinaleDecision] = useState();

  return (
    <section className="descriptionBox boxButton">
      <EditButton />
      <section className="descriptionBox__scroll">
        <header className="descriptionBox__header">
          <img
            className="descriptionBox__header--avatar"
            src={picture}
            alt="avatar de l'auteur du poste"
          />
          <section className="descriptionBox__header--right">
            <h1 className="descriptionBox__header__right--title">{title}</h1>
            <p className="descriptionBox__header__right--writer">
              par {firstname} {lastname}
            </p>
            <span className="decision__beans">
              <span className="decision__status">{status}</span>
              <span className="decision__location">{location}</span>
              <span className="decision__comments">{comments} avis</span>
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
            <p className="descriptionBox__body--text">{paragraphDetails}</p>
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
            <p className="descriptionBox__body--text">{paragraphImpact}</p>
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
            <p className="descriptionBox__body--text">{paragraphBenefits}</p>
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
            <p className="descriptionBox__body--text">{paragraphRisks}</p>
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
              {paragraphFirstDecision}
            </p>
          </article>
          <button
            type="button"
            onClick={() =>
              setIsCollapsedFinaleDecision(!isCollapsedFinaleDecision)
            }
          >
            <h2 className="title__paragraph">
              {isCollapsedFinaleDecision ? "➖" : "➕"} Décision finale
            </h2>
          </button>
          <hr className="dividing__line" />
          <article
            className={`descriptionBox__body--finaleDecision ${
              isCollapsedFinaleDecision ? "expanded" : "collapsed"
            }`}
          >
            <p className="descriptionBox__body--text">
              {paragraphFinaleDecision}
            </p>
          </article>
        </section>
      </section>
    </section>
  );
}
export default DescriptionBox;

DescriptionBox.propTypes = {
  title: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  comments: PropTypes.number.isRequired,
  picture: PropTypes.string.isRequired,
  paragraphBenefits: PropTypes.string,
  paragraphDetails: PropTypes.string.isRequired,
  paragraphFinaleDecision: PropTypes.string,
  paragraphFirstDecision: PropTypes.string,
  paragraphImpact: PropTypes.string,
  paragraphRisks: PropTypes.string,
};

DescriptionBox.defaultProps = {
  paragraphBenefits: "default",
  paragraphFinaleDecision: "default",
  paragraphFirstDecision: "default",
  paragraphImpact: "default",
  paragraphRisks: "default",
};
