import { Link } from "react-router-dom";
import "./Nav.scss";
import { useContext, useEffect, useState, useRef } from "react";
import Profile from "../Profile/Profile";
import { AuthContext } from "../../contexts/authContext";

function Nav() {
  const { user } = useContext(AuthContext);

  const [showProfile, setShowProfile] = useState(false);
  const [isAdmin, setIsAdmin] = useState(null);
  const [image, setImage] = useState(user[0].picture);

  const fileInputRef = useRef();

  const submitImage = async () => {
    const imageName = fileInputRef.current.files[0];

    if (fileInputRef.current.files.length > 0) {
      const formData = new FormData();
      formData.append("picture", imageName);

      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/picture/user/${
            user[0].user_id
          }`,
          {
            method: "PUT",
            body: formData,
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();

        // Affiche l'image sur la page
        setImage(result);
      } catch (err) {
        console.error("Upload error", err);
        // Affiche un message d'erreur à l'utilisateur
        alert("Une erreur s'est produite lors du téléchargement de l'image.");
      }
    } else {
      console.info("No image selected");
    }
  };

  useEffect(() => {
    if (!user[0].admin_id) {
      setIsAdmin("nav__links--notAdmin");
    }
    if (user[0].admin_id) {
      setIsAdmin(false);
    }
  }, []);

  const handleMoveBubble = () => {
    setShowProfile(!showProfile);
  };
  return (
    <nav className="nav__nav">
      <Link to="/homepage/decisions/all" className="nav__logo">
        <img
          className="nav__logo--img"
          src={`${
            import.meta.env.VITE_BACKEND_URL
          }/images/logo-makesense-dark.png`}
          alt="Logo Make Sense"
        />
      </Link>
      <ul className="nav__items">
        <ul className="nav__links">
          <li className={`nav__list ${isAdmin}`}>
            <Link className="nav__links--user" type="button" to="/user/create">
              Nouvel utilisateur
            </Link>
          </li>
          <li className="nav__list">
            <Link
              className="nav__links--decision"
              type="button"
              to="/decision/create"
            >
              Nouvelle décision
            </Link>
          </li>
        </ul>
        <form>
          <img
            className="nav__avatar--img"
            alt="avatar"
            src={
              image && `${import.meta.env.VITE_BACKEND_URL}/uploads/${image}`
            }
            role="presentation"
          />
          <img
            src={`${import.meta.env.VITE_BACKEND_URL}/images/user-pen.png`}
            alt="logo éditer"
            className="nav__avatar--edit"
          />
          <input
            ref={fileInputRef}
            id="imageInput"
            type="file"
            accept="image/*"
            className="nav__avatar--input"
            onMouseEnter={handleMoveBubble}
            onChange={submitImage}
          />
        </form>
      </ul>
      <Profile
        handleMoveBubble={handleMoveBubble}
        showProfile={showProfile}
        user={user[0]}
      />
    </nav>
  );
}

export default Nav;
