import { Link } from "react-router-dom";
import "./SecondaryNav.scss";

function SecondaryNav() {
  return (
    <nav className="secondaryNav__nav">
      <ul className="secondaryNav__links">
        <Link
          to="/homepage/decisions/current"
          className="secondaryNav__links--first"
        >
          Décisions en cours
        </Link>
        <Link
          to="/homepage/decisions/late"
          className="secondaryNav__links--second"
        >
          Décisions en retard
        </Link>
        <Link
          to="/homepage/decisions/user"
          className="secondaryNav__links--third"
        >
          Vos décisions
        </Link>
        <Link
          to="/homepage/decisions/finished"
          className="secondaryNav__links--fourth"
        >
          Décisions prises
        </Link>
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
