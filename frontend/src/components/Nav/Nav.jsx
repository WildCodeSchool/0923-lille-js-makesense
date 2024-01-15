import { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

function Nav() {
  const [edit, setEdit] = useState(false);

  const handleMovebubble = () => {
    setEdit(!edit);
  };

  return (
    <nav className="nav__nav">
      <Link to="/homepage" className="nav__logo">
        <img
          className="nav__logo--img"
          src=".\src\assets\logo-makesense-dark.png"
          alt="Logo Make Sense"
        />
      </Link>
      <ul className="nav__items">
        <ul className="nav__links">
          <li className="nav__list">
            <Link className="nav__links--user" type="button" to="/user/create">
              Nouvel utilisateur
            </Link>
          </li>
          <li className="nav__list">
            <Link
              className="nav__links--decision"
              type="button"
              to="/decision/create"
            >
              Nouvelle décision
            </Link>
          </li>
        </ul>
        <img
          className="nav__avatar"
          alt="user avatar"
          src="https://placehold.co/600x400"
          onMouseEnter={handleMovebubble}
          role="presentation"
        />
      </ul>
      {edit && (
        <>
          <aside className="bubble_profil" />
          <section className="bubble_avatar">
            <ul className="bubble_list">
              <li>Prénom</li>
              <li>Nom</li>
              <li>Email</li>
              <li>Bureau</li>
              <li>Poste</li>
              <li className="bubble_hover">
                <a
                  title="Une erreur ? Contactez l'administrateur."
                  href="mailto:vincent.rssx59@gmail.com"
                  onClick={handleMovebubble}
                >
                  ?
                </a>
              </li>
              <hr />
              <li id="bubble_logout">
                <Link to="/" className="bubble_link">
                  Se déconnecter
                </Link>
              </li>
            </ul>
          </section>
        </>
      )}
    </nav>
  );
}

export default Nav;
