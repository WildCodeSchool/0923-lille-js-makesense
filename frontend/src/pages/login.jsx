import "./login.scss";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login__content">
      <img
        className="login__content--logo"
        src="../src/assets/image/logo-Make_sense.png"
        alt="logo"
      />
      <form>
        <label className="login__form--identify">
          Identifiant:
          <input type="text" />
        </label>
        <br />
        <label className="login__form--password">
          Mot de passe:
          <input type="password" />
        </label>
        <br />
        <button className="login__fom--button-connect" type="submit">
          <Link to="/NewUsers">Se Connecter</Link>
        </button>
      </form>
    </div>
  );
}

export default Login;
