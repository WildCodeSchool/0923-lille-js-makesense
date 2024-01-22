import { useState } from "react";
import "./CreateUser.scss";

function CreateUser() {
  const [message] = useState("");

  return (
    <main className="createuser__content">
      <h1 className="createuser__title">Nouvel utilisateur</h1>
      <form className="createuser__form">
        <div className="createuser__form--inputsBox">
          <p className="createuser__form--mandatoryFields">
            Tous les champs sont obligatoires.
          </p>
          <label htmlFor="lastname" className="createuser__label">
            <strong>Nom</strong>
            <input
              id="lastname"
              className="createuser__input"
              type="text"
              name="lastname"
              required
            />
          </label>
          <label htmlFor="firstname" className="createuser__label">
            <strong>Prénom</strong>
            <input
              id="firstname"
              className="createuser__input"
              type="text"
              name="firstname"
              required
            />
          </label>
          <label htmlFor="email" className="createuser__label">
            <strong>Email</strong>
            <input
              id="email"
              className="createuser__input"
              type="email"
              name="email"
              required
            />
          </label>
          <label htmlFor="workplace" className="createuser__label">
            <strong>Bureau</strong>
            <select
              name="workplace"
              className="createuser__input"
              id="workplace"
              required
            >
              <option value="Americas">Americas</option>
              <option value="France">France</option>
              <option value="Lebanon">Lebanon</option>
              <option value="Philippines">Philippines</option>
              <option value="West Africa">West Africa</option>
            </select>
          </label>
          <label htmlFor="password" className="createuser__label ">
            <strong>Mot de passe</strong>
            <input
              id="password"
              className="createuser__input"
              type="password"
              name="motDePasse"
              required
            />
            <small>
              Vous devez fournir un mot de passe clair et facile à retenir pour
              l'utilisateur.
            </small>
          </label>
        </div>
        <button className="createuser__button" type="submit">
          Créer
        </button>
      </form>
      <p className="createuser__message">{message}</p>
    </main>
  );
}

export default CreateUser;
