import { Link } from "react-router-dom";
import "./Nav.scss";
import { useContext, useEffect, useState } from "react";
import Profile from "../Profile/Profile";
import { AuthContext } from "../../contexts/authContext";

function Nav() {
  const { user } = useContext(AuthContext);

  const [showProfile, setShowProfile] = useState(false);
  const [isAdmin, setIsAdmin] = useState(null);

  const [image, setImage] = useState();
  const [allImage, setAllImage] = useState();

  const submitImage = async () => {
    console.info(allImage);
    if (image) {
      // Vérifiez si une image a été sélectionnée
      const formData = new FormData();
      formData.append("image", image); // Utilisez le même clé 'image' que celle attendue par le back-end

      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/upload-image`,
          {
            method: "POST",
            body: formData, // Pas besoin d'en-tête 'Content-Type', il est défini automatiquement par le navigateur, autrement il faut gérer des Boundary
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        console.info("Upload success", result);
      } catch (err) {
        console.error("Upload error", err);
      }
    } else {
      console.info("No image selected");
    }
  };
  const onInputChange = (e) => {
    console.info("input");
    setImage(e.target.files[0]);
    submitImage();
  };

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/get-image`)
      .then((response) => response.json())
      .then((data) => setAllImage(data))
      .catch((err) => console.error(err));
  }, []);

  // 1. upload the image in front and read it as data to preview it
  // const handleAvatarUpload = (event) => {
  //   const img = event.target.files[0];

  // if (img) {
  // FileReader is part of the JS File API and allows to read uploaded files stored on the user's computer
  // its result comes as "result"

  // const reader = new FileReader();
  // reader.onload = (e) => {

  // reads the result and stores it in a variable

  // const imageDataUrl = e.target.result;

  // Set the preview image

  //   setPreviewImage(imageDataUrl);
  // };

  // Read the content of the file as Data URL through the readAsDataURL FileReader method

  //     reader.readAsDataURL(img);
  //   }
  // };

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
      <Link to="/homepage" className="nav__logo">
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
            alt="user avatar"
            src={!image ? user[0].picture : image}
            role="presentation"
          />
          <img
            src={`${import.meta.env.VITE_BACKEND_URL}/images/user-pen.png`}
            alt="logo éditer"
            className="nav__avatar--edit"
          />
          <input
            type="file"
            accept="image/*"
            // accept=".png, .jpg, .jpeg"
            className="nav__avatar--input"
            onMouseEnter={handleMoveBubble}
            onChange={onInputChange}
            // onChange={handleAvatarUpload}
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
