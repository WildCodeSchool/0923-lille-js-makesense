import "./SecondaryNav.scss";

function SecondaryNav() {
  return (
    <nav className="secondaryNav__nav">
      <ul className="secondaryNav__links">
        <a href="*" className="secondaryNav__links--first">
          Décisions en cours
        </a>
        <a href="*" className="secondaryNav__links--second">
          Décisions en retard
        </a>
        <a href="*" className="secondaryNav__links--third">
          Vos décisions
        </a>
        <a href="*" className="secondaryNav__links--third">
          Décisions prises
        </a>
      </ul>
      <img
        src={`${import.meta.env.VITE_BACKEND_URL}/images/ban-bottom.png`}
        alt="decoration navigation"
        className="secondaryNav__bottom"
      />
    </nav>
  );
}

export default SecondaryNav;
