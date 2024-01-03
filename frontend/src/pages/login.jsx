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
        <label htmlFor="identify" className="login__identify">
          Identifiant:
          <input id="identify" className="login__input" type="text" />
        </label>

        <label htmlFor="password" className="login__password">
          Mot de passe:
          <input id="password" className="login__input" type="password" />
        </label>
      </form>
      <button className="login__button" type="submit">
        Se Connecter
      </button>
    </main>
  );
}

export default Login;
