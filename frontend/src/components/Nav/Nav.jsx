import { useState } from "react";
import "./Nav.scss";

function Nav() {
  const [edit, setEdit] = useState(false);

  const handleclick = () => {
    setEdit(!edit);
  };

  return (
    <nav className="nav__nav">
      <a href="*" className="nav__logo">
        <img
          className="nav__logo--img"
          src=".\src\assets\logo-makesense-dark.png"
          alt="Make Sense logo"
        />
      </a>
      <ul className="nav__items">
        <ul className="nav__links">
          <li className="nav__list">
            <a className="nav__links--user" type="button" href="*">
              Nouvel utilisateur
            </a>
          </li>
          <li className="nav__list">
            <a className="nav__links--decision" type="button" href="*">
              Nouvelle décision
            </a>
          </li>
        </ul>
        <img
          className="nav__avatar"
          alt="user avatar"
          src="https://placehold.co/600x400"
          onClick={handleclick}
          role="presentation"
        />
        {edit ? (
          <section className="profil_avatar">
            <ul>
              <li>Firstname</li>
              <li>Lastname</li>
              <li>Mail</li>
              <li>Location</li>
              <li>Position</li>
              <li>?</li>
              <li>Log out</li>
            </ul>
          </section>
        ) : null}
        {/* <img
          className="edit_avatar"
          alt="edit_avatar"
          src="../../assets/image/user-pen.png"
        /> */}
      </ul>
    </nav>
  );
}

export default Nav;
