import "./DescriptionBox.scss";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

function DescriptionBox({
  title,
  status,
  location,
  comments,
  picture,
  firstname,
  lastname,
  decisionId,
}) {
  const [isCollapsedDetails, setIsCollapsedDetails] = useState();
  const [isCollapsedImpact, setIsCollapsedImpact] = useState();
  const [isCollapsedBenefits, setIsCollapsedBenefits] = useState();
  const [isCollapsedHazards, setIsCollapsedHazards] = useState();
  const [isCollapsedFirstDecision, setIsCollapsedFirstDecision] = useState();
  const [content, setContent] = useState([0]);
  useEffect(() => {
    fetch(
      `${
        import.meta.env.VITE_BACKEND_URL
      }/api/decisions/${decisionId}/paragraphs`
    )
      .then((response) => response.json())
      .then((data) => setContent(data))
      .catch((error) => console.error(error));
  }, [decisionId]);

  return (
    <section className="descriptionBox">
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
              par {lastname} {firstname}
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
            <p className="descriptionBox__body--text">
              {content[0].paragraph_details}
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
              {content[0].paragraph_impact}
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
              {content[0].paragraph_benefits}
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
              {content[0].paragraph_risks}
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
              {content[0].paragraph_first_decision}
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
  decisionId: PropTypes.number.isRequired,
};
