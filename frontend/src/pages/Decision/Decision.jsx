import "./Decision.scss";
import { useState, useEffect } from "react";
import { useDecisionContext } from "../../contexts/decisionContext";
import DescriptionBox from "../../components/DescriptionBox/DescriptionBox";
import CommentSection from "../../components/CommentSection/CommentSection";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import EditButton from "../../components/EditButton/EditButton";

function Decision() {
  const [writeComment, setWriteComment] = useState();
  const { decisionId } = useDecisionContext();
  const [decision, setDecision] = useState({
    decision_date: "--",
    decision_delay: "--",
    decision_id: 0,
    decision_title: "--",
    firstname: "--",
    lastname: "--",
    location: "--",
    nb_comments: 0,
    paragraph_benefits: "--",
    paragraph_decision: "--",
    paragraph_details: "--",
    paragraph_finale_decision: "--",
    paragraph_first_decision: "--",
    paragraph_id: 0,
    paragraph_impact: "--",
    paragraph_risks: "--",
    picture: "http://placekitten.com/200/311",
    status: "--",
    user_id: 0,
  });

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/decisions/${decisionId}`)
      .then((response) => response.json())
      .then((data) => setDecision(data))
      .catch((error) => console.error(error));
  }, []);

  const datetime = new Date(decision.decision_date);
  const formattedDate = datetime.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  return (
    <main className="decision__page">
      {decision && (
        <>
          <header className="decision__page--header">
            <h2 className="openAndClose__date">
              Date d'ouverture: {formattedDate} <br />
              Date de clôture: {decision.decision_delay}
            </h2>
            <ProgressBar status={decision.status} />
            <EditButton />
          </header>
          <section className="decision__page--body">
            <section
              className={`left__section ${writeComment ? "hidden" : null}`}
            >
              <DescriptionBox
                title={decision.decision_title}
                status={decision.status}
                location={decision.location}
                comments={decision.nb_comments}
                picture={decision.picture}
                firstname={decision.firstname}
                lastname={decision.lastname}
                paragraphBenefits={decision.paragraph_benefits}
                paragraphDecision={decision.paragraph_decision}
                paragraphDetails={decision.paragraph_details}
                paragraphFinaleDecision={decision.paragraph_finale_decision}
                paragraphFirstDecision={decision.paragraph_first_decision}
                paragraphImpact={decision.paragraph_impact}
                paragraphRisks={decision.paragraph_risks}
              />
            </section>
            <section
              className={`right__section ${!writeComment ? "hidden" : null}`}
            >
              <CommentSection />
            </section>
            <input
              value={
                writeComment ? "Voir la décision" : "Voir les commentaires"
              }
              onClick={() => setWriteComment(!writeComment)}
              type="button"
              className="commentLink__button"
            />
          </section>
        </>
      )}
    </main>
  );
}

export default Decision;
