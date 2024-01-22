import { Link } from "react-router-dom";
import "./Nav.scss";
import { useContext, useEffect, useState } from "react";
import Profile from "../Profile/Profile";
import { AuthContext } from "../../contexts/authContext";

function Nav() {
  const { user } = useContext(AuthContext);

  const [showProfile, setShowProfile] = useState(false);
  const [isAdmin, setIsAdmin] = useState(null);
  const [previewImage, setPreviewImage] = useState(user[0].picture);

  useEffect(() => {
    if (user.admin_id !== null) {
      setIsAdmin("nav__links--notAdmin");
    }
  }, []);

  /* storer l'image pour l'envoyer en back (pas de preview)
  useEffect pour fetch l'image ? avec l'input en dépendance ? */

  // 2. The picture is uploaded in the backend
  const handleAvatarUpdate = async () => {
    try {
      const formData = new FormData();
      formData.append("userId", user[0].user_id);
      formData.append("avatar", previewImage);
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/user/picture/${user[0].user_id}`,
        {
          method: "PUT",
          body: formData,
        }
      );

      if (!response.ok) {
        console.info(response);
      }
    } catch (err) {
      console.error("Error during upload.", err);
    }
  };

  // 1. upload the image in front and read it as data to preview it
  const handleAvatarUpload = (event) => {
    const img = event.target.files[0];

    if (img) {
      // FileReader is part of the JS File API and allows to read uploaded files stored on the user's computer
      // its result comes as "result"
      const reader = new FileReader();
      reader.onload = (e) => {
        // reads the result and stores it in a variable
        const imageDataUrl = e.target.result;
        // Set the preview image
        setPreviewImage(imageDataUrl);
        handleAvatarUpdate();
      };
      // Read the content of the file as Data URL through the readAsDataURL FileReader method
      reader.readAsDataURL(img);
    }
  };

  const handleMoveBubble = () => {
    setShowProfile(!showProfile);
  };

  return (
    <nav className="nav__nav">
      <Link to="/homepage" className="nav__logo">
        <img
          className="nav__logo--img"
          src="./src/assets/logo-makesense-dark.png"
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
        <img
          className="nav__avatar--img"
          alt="user avatar"
          src={!previewImage ? user[0].picture : previewImage}
          role="presentation"
        />
        <img
          src="/src/assets/image/user-pen.png"
          alt="logo éditer"
          className="nav__avatar--edit"
        />
        <input
          type="file"
          accept=".png, .jpg, .jpeg"
          className="nav__avatar--input"
          onMouseEnter={handleMoveBubble}
          onChange={handleAvatarUpload}
        />
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
