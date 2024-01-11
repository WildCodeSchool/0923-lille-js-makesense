import "./CreateUser.scss";

function CreateUser() {
  return (
    <main className="createuser__content">
      <span className="createuser__title">Nouvel utilisateur</span>
      <form className="createuser__form">
        <label htmlFor="name" className="createuser__label">
          <span className="createuser__text"> Nom :</span>
          <input
            id="name"
            className="createuser__input"
            type="text"
            name="nom"
          />
        </label>
        <label htmlFor="firstname" className="createuser__label">
          <span className="createuser__text">Prénom :</span>
          <input
            id="firstname"
            className="createuser__input"
            type="text"
            name="prenom"
          />
        </label>
        <label htmlFor="email" className="createuser__label">
          <span className="createuser__text"> Email :</span>
          <input
            id="email"
            className="createuser__input"
            type="email"
            name="email"
          />
        </label>
        <label htmlFor="place" className="createuser__label">
          <span className="createuser__text"> Lieu de travail :</span>
          <input
            id="place"
            className="createuser__input"
            type="text"
            name="lieuTravail"
          />
        </label>
        <label htmlFor="password" className="createuser__label ">
          <span className="createuser__text"> Mot de passe :</span>
          <input
            id="password"
            className="createuser__input"
            type="password"
            name="motDePasse"
          />
        </label>
      </form>
      <button className="createuser__button" type="submit">
        Créer
      </button>
    </main>
  );
}

export default CreateUser;
