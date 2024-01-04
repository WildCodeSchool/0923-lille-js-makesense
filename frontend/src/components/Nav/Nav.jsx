import "./Nav.scss";

function Nav() {
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
        />
      </ul>
    </nav>
  );
}

export default Nav;
