import PropTypes from "prop-types";
import "./ProgressBar.scss";

function ProgressBar({ status }) {
  return (
    <section>
      <section className="progress__bar">
        <section className="status">
          <section
            className={`status__circle ${
              status === "Décision commencée" && "visible"
            }`}
          >
            <img
              className="status__icon seeding "
              src={`${
                import.meta.env.VITE_BACKEND_URL
              }/images/hand-holding-seeding.png`}
              alt="icône décision commencée"
            />
          </section>
          <p
            className={`progressBar__status ${
              status !== "Décision commencée" && "name__hidden"
            }`}
          >
            {status}
          </p>
        </section>
        <section className="status">
          <section
            className={`status__circle ${
              status === "Première décision prise" && "visible"
            }`}
          >
            <img
              className="status__icon tulip"
              src={`${
                import.meta.env.VITE_BACKEND_URL
              }/images/flower-tulip.png`}
              alt="icône décision prise"
            />
          </section>
          <p
            className={`progressBar__status ${
              status !== "Première décision prise" && "name__hidden"
            }`}
          >
            {status}
          </p>
        </section>
        <section className="status">
          <section
            className={`status__circle ${
              status === "Décision définitive" && "visible"
            }`}
          >
            <img
              className="status__icon flower"
              src={`${
                import.meta.env.VITE_BACKEND_URL
              }/images/flower-daffodil.png`}
              alt="icône décision définitive"
            />
          </section>
          <p
            className={`progressBar__status ${
              status !== "Décision définitive" && "name__hidden"
            }`}
          >
            {status}
          </p>
        </section>
        <section className="status">
          <section
            className={`status__circle ${
              status === "Décision non aboutie" && "visible"
            }`}
          >
            <img
              className="status__icon faucet"
              src={`${import.meta.env.VITE_BACKEND_URL}/images/faucet.png`}
              alt="icône non aboutie"
            />
          </section>
          <p
            className={`progressBar__status ${
              status !== "Décision non aboutie" && "name__hidden"
            }`}
          >
            {status}
          </p>
        </section>
        <section className="status">
          <section
            className={`status__circle ${
              status === "Décision terminée" && "visible"
            }`}
          >
            <img
              className="status__icon bouquet"
              src={`${
                import.meta.env.VITE_BACKEND_URL
              }/images/flower-bouquet.png`}
              alt="icône décision terminé"
            />
          </section>
          <p
            className={`progressBar__status ${
              status !== "Décision terminée" && "name__hidden"
            }`}
          >
            {status}
          </p>
        </section>
      </section>
    </section>
  );
}

ProgressBar.propTypes = {
  status: PropTypes.string.isRequired,
};

export default ProgressBar;
