import { useContext, useRef } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";

function Login() {
  // References for email and password inputs
  const emailRef = useRef();
  const passwordRef = useRef();

  const { setUser } = useContext(AuthContext);

  // Hook for navigation
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Ask for a connexion
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/login`,
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: emailRef.current.value,
            password: passwordRef.current.value,
          }),
        }
      );
      // If the connexion is successful
      if (response.status === 200) {
        const user = await response.json();

        setUser(user);

        navigate("/homepage");
      } else {
        // If the connexion fails
        console.info(response);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main className="login__content">
      <img
        className="login__logo"
        src={`${
          import.meta.env.VITE_BACKEND_URL
        }/assets/images/logo-Make_sense.png`}
        alt="logo"
      />
      <form className="login__form" onSubmit={handleSubmit}>
        <label htmlFor="email" className="login__identify">
          E-mail :
          <input
            id="email"
            className="login__input"
            type="email"
            ref={emailRef}
          />
        </label>
        <label htmlFor="password" className="login__password">
          Mot de passe :
          <input
            id="password"
            className="login__input"
            type="password"
            ref={passwordRef}
          />
        </label>
        <button className="login__button" type="submit">
          Se Connecter
        </button>
      </form>
    </main>
  );
}

export default Login;
