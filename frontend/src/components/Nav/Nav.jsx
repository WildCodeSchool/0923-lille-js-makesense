import "./Nav.scss";

function Nav() {
  return (
    <ul className="nav__nav">
      <li className="nav__logo">
        <img
          className="nav__logo--img"
          src=".\src\assets\logo-makesense-dark.png"
          alt="Make Sense logo"
        />
      </li>
      <li>
        <ul className="nav__links">
          <li>
            <a className="nav__links--user" type="button" href="*">
              Nouvel utilisateur
            </a>
          </li>
          <li>
            <a className="nav__links--decision" type="button" href="*">
              Nouvelle décision
            </a>
          </li>
        </ul>
      </li>
      <li>
        <img
          className="nav__avatar"
          alt="user avatar"
          src="https://placehold.co/600x400"
        />
      </li>
    </ul>
  );
}

export default Nav;
