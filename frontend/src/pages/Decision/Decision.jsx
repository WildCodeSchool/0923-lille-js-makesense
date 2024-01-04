import "./Decision.scss";
import DescriptionBox from "../../components/DescriptionBox/DescriptionBox";
import CommentSection from "../../components/CommentSection/CommentSection";

function Decision() {
  return (
    <main className="decision__page">
      <header>
        <h2>
          Date d'ouverture: 00/00/2023 <br />
          Date de cloture: 00/00/2024
        </h2>
      </header>
      <section className="decision__page--body">
        <section>
          <DescriptionBox />
        </section>
        <section>
          <CommentSection />
        </section>
      </section>
    </main>
  );
}

export default Decision;
