import { Link } from "react-router-dom";
import "./EditButton.scss";

function EditButton() {
  return (
    <Link to="/decision/updatedecision" className="edit_button">
      Editer la décision
    </Link>
  );
}

export default EditButton;
