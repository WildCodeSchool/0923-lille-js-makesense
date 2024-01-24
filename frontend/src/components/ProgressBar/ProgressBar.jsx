import { useEffect, useState } from "react";
import "./ProgressBar.scss";
import { useDecisionContext } from "../../contexts/decisionContext";

function ProgressBar() {
  const { decisionId } = useDecisionContext();
  const [updateprogressbar, setupdateprogressbar] = useState("");
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/decision/${decisionId}`)
      .then((response) => response.json())
      .then((data) => setupdateprogressbar(data))
      .catch((error) => console.error(error));
  }, []);
  const [activeStatus, setactiveStatus] = useState();
  useEffect(() => {
    setactiveStatus(updateprogressbar.status);
  }, [updateprogressbar.status]);

  const firstStatus = "Décision commencée";
  const secondStatus = "Première décision prise";
  const thirdStatus = "Décision définitive";
  const fourthStatus = "Décision non aboutie";
  const fifthStatus = "Décision terminée";
  return (
    <main>
      {activeStatus && (
        <section className="progress__bar">
          <section className="status">
            <section
              className={`status__circle ${
                activeStatus === firstStatus && "visible"
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
              className={activeStatus !== firstStatus && "status__name--hidden"}
            >
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
                src={`${import.meta.env.VITE_BACKEND_URL}/images/flower-tulip.png`}
                alt="icône décision prise"
              />
            </section>
            <p
              className={
                activeStatus !== secondStatus && "status__name--hidden"
              }
            >
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
                src={`${
                  import.meta.env.VITE_BACKEND_URL
                }/images/flower-daffodil.png`}
                alt="icône décision définitive"
              />
            </section>
            <p
              className={activeStatus !== thirdStatus && "status__name--hidden"}
            >
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
                src={`${import.meta.env.VITE_BACKEND_URL}/images/faucet.png`}
                alt="icône non aboutie"
              />
            </section>
            <p
              className={
                activeStatus !== fourthStatus && "status__name--hidden"
              }
            >
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
                src={`${
                  import.meta.env.VITE_BACKEND_URL
                }/images/flower-bouquet.png`}
                alt="icône décision terminé"
              />
            </section>
            <p
              className={activeStatus !== fifthStatus && "status__name--hidden"}
            >
              Décision terminée
            </p>
          </section>
        </section>
      )}
    </main>
  );
}

export default ProgressBar;
