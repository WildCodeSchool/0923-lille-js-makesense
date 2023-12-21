import "./NewUsers.scss";
import Nav from "../Nav/Nav";

function NewUsers() {
  return (
    <main className="newusers__content">
      <Nav />
      <span className="newusers__title">Nouvel utilisateur</span>
      <form className="newusers__form">
        <label className="newusers__label">
          <span className="newusers__text"> Nom :</span>
          <input className="newusers__input" type="text" name="nom" />
        </label>
        <label className="newusers__label">
          <span className="newusers__text">Prénom :</span>
          <input className="newusers__input" type="text" name="prenom" />
        </label>
        <label className="newusers__label">
          <span className="newusers__text"> Email :</span>
          <input className="newusers__input" type="email" name="email" />
        </label>
        <label className="newusers__label">
          <span className="newusers__text"> Lieu de travail :</span>
          <input className="newusers__input" type="text" name="lieuTravail" />
        </label>
        <label className="newusers__label ">
          <span className="newusers__text"> Mot de passe :</span>
          <input
            className="newusers__input"
            type="password"
            name="motDePasse"
          />
        </label>
      </form>
      <button className="newusers__button" type="submit">
        Créer
      </button>
    </main>
  );
}

export default NewUsers;
