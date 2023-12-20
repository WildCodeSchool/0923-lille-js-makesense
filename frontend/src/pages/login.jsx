import "./login.scss";

function Login() {
  return (
    <div className="content">
      <img
        className="logo"
        src="../src/assets/image/logo-Make_sense.png"
        alt="logo"
      />
      <form>
        <label className="identifier">
          Identifiant:
          <input type="text" />
        </label>
        <br />
        <label className="password">
          Mot de passe:
          <input type="password" />
        </label>
        <br />
        <button className="button__log-in" type="submit">
          Se Connecter
        </button>
      </form>
    </div>
  );
}

export default Login;
