import { useState } from "react";
import "./CommentSection.scss";

function CommentSection() {
  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState([]);

  const onChangHandler = (e) => {
    setComment(e.target.value);
  };
  const onClickHandler = () => {
    setCommentList((comments) => [...comments, comment]);
  };
  const handlePress = (e) => {
    if (e.key === "Enter") {
      onClickHandler();
      e.target.value = "";
    }
  };
  return (
    <section className="commentSection">
      <h2 className="commentSection--title">Avis</h2>
      <section className="commentSection__container">
        <section className="commentSection__comment--container">
          {commentList.map((com) => (
            <section className="commentSection__comment--box">{com}</section>
          ))}
        </section>
        <hr />
        <form className="commentSection__input__field">
          <textarea
            value={comment.value}
            onKeyDown={handlePress}
            onChange={onChangHandler}
            className="commentSection__textarea"
          />
          <button
            onClick={onClickHandler}
            type="submit"
            className="comment__button"
          >
            Envoyer
          </button>
        </form>
      </section>
    </section>
  );
}

export default CommentSection;
