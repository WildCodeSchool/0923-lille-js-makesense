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
  const [decision, setDecision] = useState(1); // should I put a "" instead?
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/decisions/${decisionId}`)
      .then((response) => response.json())
      .then((data) => setDecision(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <main className="decision__page">
      <header className="decision__page--header">
        <h2 className="openAndClose__date">
          Date d'ouverture: {decision.decision_date} <br />
          Date de clôture: {decision.decision_delay}
        </h2>
        <ProgressBar status={decision.status} />
        <EditButton />
      </header>
      <section className="decision__page--body">
        <section className={`left__section ${writeComment ? "hidden" : null}`}>
          <DescriptionBox
            title={decision.decision_title}
            status={decision.status}
            location={decision.location}
            comments={decision.nb_comments}
            picture={decision.picture}
            firstname={decision.firstname}
            lastname={decision.lastname}
            decisionId={decisionId}
          />
        </section>
        <section
          className={`right__section ${!writeComment ? "hidden" : null}`}
        >
          <CommentSection />
        </section>
        <input
          value={writeComment ? "Voir la décision" : "Voir les commentaires"}
          onClick={() => setWriteComment(!writeComment)}
          type="button"
          className="commentLink__button"
        />
      </section>
    </main>
  );
}

export default Decision;
