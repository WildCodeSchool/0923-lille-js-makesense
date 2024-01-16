import { Link } from "react-router-dom";
import "./Nav.scss";
import { useState } from "react";
import MyProfile from "../MyProfile/MyProfile";

function Nav() {
  const [edit, setEdit] = useState(false);

  const handleMoveBubble = () => {
    setEdit(!edit);
  };

  return (
    <nav className="nav__nav">
      <Link to="/homepage" className="nav__logo">
        <img
          className="nav__logo--img"
          src="../../src/assets/logo-makesense-dark.png"
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
          onMouseEnter={handleMoveBubble}
          role="presentation"
        />
      </ul>
      <MyProfile handleMoveBubble={handleMoveBubble} edit={edit} />
    </nav>
  );
}

export default Nav;
