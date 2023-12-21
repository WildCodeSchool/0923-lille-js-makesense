import "./login.scss";

function Login() {
  return (
    <main className="login__content">
      <img
        className="login__content--logo"
        src="../src/assets/image/logo-Make_sense.png"
        alt="logo"
      />
      <form>
        <label className="login__form--identify">
          Identifiant:
          <input className="login__form--input-identify" type="text" />
        </label>
        <br />
        <label className="login__form--password">
          Mot de passe:
          <input className="login__form--input-password" type="password" />
        </label>
      </form>
      <br />
      <button className="login__fom--button-connect" type="submit">
        Se Connecter
      </button>
    </main>
  );
}

export default Login;
