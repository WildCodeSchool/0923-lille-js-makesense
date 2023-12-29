import "./login.scss";

function Login() {
  return (
    <main className="login__content">
      <img
        className="login__logo"
        src="../src/assets/image/logo-Make_sense.png"
        alt="logo"
      />
      <form>
        <label className="login__identify">
          Identifiant:
          <input className="login__input" type="text" />
        </label>
        <br />
        <label className="login__password">
          Mot de passe:
          <input className="login__input" type="password" />
        </label>
      </form>
      <br />
      <button className="login__button-connect" type="submit">
        Se Connecter
      </button>
    </main>
  );
}

export default Login;
