import "./NewUsers.scss";

function NewUsers() {
  return (
    <main className="newusers__content">
      <span className="newusers__title">Nouvel utilisateur</span>
      <form className="newusers__form">
        <label htmlFor="name" className="newusers__label">
          <span className="newusers__text"> Nom :</span>
          <input id="name" className="newusers__input" type="text" name="nom" />
        </label>
        <label htmlFor="firstname" className="newusers__label">
          <span className="newusers__text">Prénom :</span>
          <input
            id="firstname"
            className="newusers__input"
            type="text"
            name="prenom"
          />
        </label>
        <label htmlFor="email" className="newusers__label">
          <span className="newusers__text"> Email :</span>
          <input
            id="email"
            className="newusers__input"
            type="email"
            name="email"
          />
        </label>
        <label htmlFor="place" className="newusers__label">
          <span className="newusers__text"> Lieu de travail :</span>
          <input
            id="place"
            className="newusers__input"
            type="text"
            name="lieuTravail"
          />
        </label>
        <label htmlFor="password" className="newusers__label ">
          <span className="newusers__text"> Mot de passe :</span>
          <input
            id="password"
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
