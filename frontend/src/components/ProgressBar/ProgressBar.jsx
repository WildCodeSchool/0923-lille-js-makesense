import "./ProgressBar.scss";

function ProgressBar() {
  return (
    <section className="progress__bar">
      <section className="status">
        <section className="status__circle seeding">
          <img
            className="icon seeding "
            src="src/assets/image/hand-holding-seeding.png"
            alt="icône décision commencée"
          />
        </section>
        <p>Prise de décision commencée</p>
      </section>
      <section className="status">
        <section className="status__circle tulip">
          <img
            className="icon tulip"
            src="src/assets/image/flower-tulip.png"
            alt="icône décision prise"
          />
        </section>
        <p>Première décision prise</p>
      </section>
      <section className="status">
        <section className="status__circle flower">
          <img
            className="icon flower"
            src="src/assets/image/flower-daffodil.png"
            alt="icône décision définitive"
          />
        </section>
        <p>Décision définitive</p>
      </section>
      <section className="status">
        <section className="status__circle faucet">
          <img
            className="icon faucet"
            src="src/assets/image/faucet.png"
            alt="icône non aboutie"
          />
        </section>
        <p>Décision non aboutie</p>
      </section>
      <section className="status">
        <section className="status__circle bouquet">
          <img
            className="icon bouquet"
            src="src/assets/image/flower-bouquet.png"
            alt="icône décision terminé"
          />
        </section>
        <p>Décision terminée</p>
      </section>
    </section>
  );
}

export default ProgressBar;
