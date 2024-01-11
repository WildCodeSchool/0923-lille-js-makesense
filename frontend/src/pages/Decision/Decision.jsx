import "./Decision.scss";
import { useState } from "react";
import DescriptionBox from "../../components/DescriptionBox/DescriptionBox";
import CommentSection from "../../components/CommentSection/CommentSection";
import ProgressBar from "../../components/ProgressBar/ProgressBar";

function Decision() {
  const [writeComment, setWriteComment] = useState();
  return (
    <main className="decision__page">
      <header className="decision__page--header">
        <h2 className="openAndClose__date">
          Date d'ouverture: 00/00/2023 <br />
          Date de cloture: 00/00/2024
        </h2>
        <ProgressBar />
      </header>
      <section className="decision__page--body">
        <section className={`left__section ${writeComment ? "hidden" : null}`}>
          <DescriptionBox />
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
