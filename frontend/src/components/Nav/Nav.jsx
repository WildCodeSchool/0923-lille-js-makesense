import { Link } from "react-router-dom";
import "./Nav.scss";

function Nav() {
  return (
    <nav className="nav__nav">
      <a href="*" className="nav__logo">
        <Link to="/homepage">
          <img
            className="nav__logo--img"
            src=".\src\assets\logo-makesense-dark.png"
            alt="Make Sense logo"
          />
        </Link>
      </a>
      <ul className="nav__items">
        <ul className="nav__links">
          <li className="nav__list">
            <a className="nav__links--user" type="button" href="*">
              <Link to="/newuser"> Nouvel utilisateur</Link>
            </a>
          </li>
          <li className="nav__list">
            <a className="nav__links--decision" type="button" href="*">
              <Link to="/createdecision">Nouvelle décision</Link>
            </a>
          </li>
        </ul>
        <img
          className="nav__avatar"
          alt="user avatar"
          src="https://placehold.co/600x400"
        />
      </ul>
    </nav>
  );
}

export default Nav;
