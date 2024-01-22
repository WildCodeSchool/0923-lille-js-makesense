import { useState } from "react";
import "./ProgressBar.scss";

function ProgressBar() {
  const firstStatus = "Décision commencée";
  const secondStatus = "Première décision prise";
  const thirdStatus = "Décision définitive";
  const fourthStatus = "Décision non aboutie";
  const fifthStatus = "Décision terminée";

  const [activeStatus] = useState(thirdStatus);

  return (
    <section className="progress__bar">
      <section className="status">
        <section
          className={`status__circle ${
            activeStatus === firstStatus && "visible"
          }`}
        >
          <img
            className="status__icon seeding "
            src="src/assets/image/hand-holding-seeding.png"
            alt="icône décision commencée"
          />
        </section>
        <p className={activeStatus !== firstStatus && "status__name--hidden"}>
          Décision commencée
        </p>
      </section>
      <section className="status">
        <section
          className={`status__circle ${
            activeStatus === secondStatus && "visible"
          }`}
        >
          <img
            className="status__icon tulip"
            src="src/assets/image/flower-tulip.png"
            alt="icône décision prise"
          />
        </section>
        <p className={activeStatus !== secondStatus && "status__name--hidden"}>
          Première décision prise
        </p>
      </section>
      <section className="status">
        <section
          className={`status__circle ${
            activeStatus === thirdStatus && "visible"
          }`}
        >
          <img
            className="status__icon flower"
            src="src/assets/image/flower-daffodil.png"
            alt="icône décision définitive"
          />
        </section>
        <p className={activeStatus !== thirdStatus && "status__name--hidden"}>
          Décision définitive
        </p>
      </section>
      <section className="status">
        <section
          className={`status__circle ${
            activeStatus === fourthStatus && "visible"
          }`}
        >
          <img
            className="status__icon faucet"
            src="src/assets/image/faucet.png"
            alt="icône non aboutie"
          />
        </section>
        <p className={activeStatus !== fourthStatus && "status__name--hidden"}>
          Décision non aboutie
        </p>
      </section>
      <section className="status">
        <section
          className={`status__circle ${
            activeStatus === fifthStatus && "visible"
          }`}
        >
          <img
            className="status__icon bouquet"
            src="src/assets/image/flower-bouquet.png"
            alt="icône décision terminé"
          />
        </section>
        <p className={activeStatus !== fifthStatus && "status__name--hidden"}>
          Décision terminée
        </p>
      </section>
    </section>
  );
}

export default ProgressBar;
