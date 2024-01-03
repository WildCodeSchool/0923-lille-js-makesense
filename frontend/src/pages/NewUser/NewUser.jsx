import "./NewUser.scss";

function newuser() {
  return (
    <main className="newuser__content">
      <h1 className="newuser__title">Nouvel utilisateur</h1>
      <form className="newuser__form">
        <label className="newuser__label">
          <span className="newuser__text"> Nom :</span>
          <input className="newuser__input" type="text" name="nom" />
        </label>
        <label className="newuser__label">
          <span className="newuser__text">Prénom :</span>
          <input className="newuser__input" type="text" name="prenom" />
        </label>
        <label className="newuser__label">
          <span className="newuser__text"> Email :</span>
          <input className="newuser__input" type="email" name="email" />
        </label>
        <label className="newuser__label">
          <span className="newuser__text"> Lieu de travail :</span>
          <input className="newuser__input" type="text" name="lieuTravail" />
        </label>
        <label className="newuser__label ">
          <span className="newuser__text"> Mot de passe :</span>
          <input className="newuser__input" type="password" name="motDePasse" />
        </label>
      </form>
      <button className="newuser__button" type="submit">
        Créer
      </button>
    </main>
  );
}

export default newuser;
