import "./NewUsers.scss";

function NewUsers() {
  return (
    <div className="newusers__content">
      <span>Nouvel utilisateur</span>
      <form>
        <label className="newusers__content--nom">
          Nom :
          <input type="text" name="nom" />
        </label>
        <label className="newusers__content--prenom">
          Prénom :
          <input type="text" name="prenom" />
        </label>
        <label className="newusers__content--email">
          Email :
          <input type="email" name="email" />
        </label>
        <label className="newusers__content--lieuTravail">
          Lieu de travail :
          <input type="text" name="lieuTravail" />
        </label>
        <label className="newusers__content--motDePasse">
          Mot de passe :
          <input type="password" name="motDePasse" />
        </label>
        <button className="newusers__content--button" type="submit">
          Créer
        </button>
      </form>
    </div>
  );
}

export default NewUsers;
