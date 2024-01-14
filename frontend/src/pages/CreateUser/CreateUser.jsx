import "./CreateUser.scss";

function CreateUser() {
  return (
    <main className="createuser__content">
      <h1 className="createuser__title">Nouvel utilisateur</h1>
      <form className="createuser__form">
        <label htmlFor="name" className="createuser__label">
          <strong>Nom :</strong>
          <input
            id="name"
            className="createuser__input"
            type="text"
            name="nom"
          />
        </label>
        <label htmlFor="firstname" className="createuser__label">
          <strong>Prénom :</strong>
          <input
            id="firstname"
            className="createuser__input"
            type="text"
            name="prenom"
          />
        </label>
        <label htmlFor="email" className="createuser__label">
          <strong>Email :</strong>
          <input
            id="email"
            className="createuser__input"
            type="email"
            name="email"
          />
        </label>
        <label htmlFor="place" className="createuser__label">
          <strong>Lieu de travail :</strong>
          <select name="status" className="createuser__input" id="place">
            <option value="court">Americas</option>
            <option value="moyen">France</option>
            <option value="long">Lebanon</option>
            <option value="long">Philippines</option>
            <option value="long">West Africa</option>
          </select>
        </label>
        <label htmlFor="password" className="createuser__label ">
          <strong>Mot de passe :</strong>
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
