import { useRef, useState } from "react";
import "./CreateUser.scss";

function CreateUser() {
  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const emailRef = useRef();
  const locationRef = useRef();
  const passwordRef = useRef();
  const [message, setMessage] = useState("");

  // Gestionnaire de soumission du formulaire
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Appel à l'API pour demander une connexion
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/user/create`,
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            firstname: firstnameRef.current.value,
            lastname: lastnameRef.current.value,
            email: emailRef.current.value,
            location: locationRef.current.value,
            password: passwordRef.current.value,
          }),
        }
      );

      // Redirection vers la page de connexion si la création réussit
      if (response.status === 201) {
        setMessage(
          `🚀 Utilisateur créé : ${lastnameRef.current.value} ${firstnameRef.current.value}. 🚀`
        );
        firstnameRef.current.value = "";
        lastnameRef.current.value = "";
        emailRef.current.value = "";
        locationRef.current.value = "Americas";
        passwordRef.current.value = "";
      } else {
        // Log des détails de la réponse en cas d'échec
        console.info(response);
      }
    } catch (err) {
      // Log des erreurs possibles
      console.error("error in create user", err);
    }
  };
  return (
    <main className="createuser__content">
      <h1 className="createuser__title">Nouvel utilisateur</h1>
      <form className="createuser__form" onSubmit={handleSubmit}>
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
              ref={lastnameRef}
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
              ref={firstnameRef}
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
              ref={emailRef}
              required
            />
          </label>
          <label htmlFor="workplace" className="createuser__label">
            <strong>Bureau</strong>
            <select
              name="workplace"
              className="createuser__input"
              id="workplace"
              ref={locationRef}
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
              ref={passwordRef}
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
