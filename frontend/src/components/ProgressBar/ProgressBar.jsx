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
        </section>
      </section>
      <p className="progressBar__status">{status}</p>
    </section>
  );
}

ProgressBar.propTypes = {
  status: PropTypes.string.isRequired,
};

export default ProgressBar;
