import "./ProgressBar.scss";
import PropTypes from "prop-types";

function ProgressBar({ status }) {
  return (
    <section className="progressBar">
      <section className="progressBar__icons">
        <section className="status__circle seeding">
          <img
            className="progressBar__icon seeding"
            src="src/assets/image/hand-holding-seeding.png"
            alt="icône décision commencée"
          />
        </section>
        <section className="status__circle tulip">
          <img
            className="progressBar__icon tulip"
            src="src/assets/image/flower-tulip.png"
            alt="icône décision prise"
          />
        </section>
        <section className="status__circle flower">
          <img
            className="progressBar__icon flower"
            src="src/assets/image/flower-daffodil.png"
            alt="icône décision définitive"
          />
        </section>
        <section className="status__circle -faucet">
          <img
            className="progressBar__icon faucet"
            src="src/assets/image/faucet.png"
            alt="icône décision non aboutie"
          />
        </section>
        <section className="status__circle bouquet">
          <img
            className="progressBar__icon bouquet"
            src="src/assets/image/flower-bouquet.png"
            alt="icône décision terminée"
          />
        </section>
      </section>
      <h3 className="progressBar__status">{status}</h3>
    </section>
  );
}

export default ProgressBar;

ProgressBar.propTypes = {
  status: PropTypes.string.isRequired,
};
