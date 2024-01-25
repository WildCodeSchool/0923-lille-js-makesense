import { useState } from "react";
import "./CommentSection.scss";
import PropTypes from "prop-types";

function CommentSection({
  handleSubmit,
  comment,
  setComment,
  commentContentRef,
}) {
  const [commentList, setCommentList] = useState([]);

  const onChangeHandler = (event) => {
    setComment(event.target.value);
  };
  const onClickHandler = () => {
    if (comment.trim() !== "") {
      setCommentList((comments) => [...comments, comment]);
      setComment("");
    }
  };
  const handlePress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onClickHandler();
      e.target.value = "";
    }
  };
  return (
    <section className="commentSection">
      <h2 className="commentSection__title">Commentaires</h2>
      <section className="commentSection__container">
        <section className="commentSection__comment--container">
          {commentList.map((com) => (
            <section className="commentSection__comment--assembly">
              <img
                className="commentSection__comment--avatar"
                src="src/assets/vincent.png"
                alt="avatar"
              />
              <section className="commentSection__comment--box">
                <section className="commentSection__comment__textSection">
                  <h4 className="commentSection__comment--name">
                    Vincent Rousseaux (expert)
                  </h4>
                  <p className="commenSection__comment--dateTime">
                    le 15 janvier à 10h
                  </p>
                  <p>{com}</p>
                </section>
              </section>
            </section>
          ))}
        </section>
        <hr className="dividing__line" />
        <form method="post" className="commentSection__input--field">
          <textarea
            value={comment}
            placeholder="Rédigez un commentaire..."
            onKeyDown={handlePress}
            onChange={onChangeHandler}
            className="commentSection__textarea"
            ref={commentContentRef}
            required
          />
          <button
            onSubmit={handleSubmit}
            onClick={onClickHandler}
            type="button"
            className="comment__button"
          >
            Commenter
          </button>
        </form>
      </section>
    </section>
  );
}

export default CommentSection;

CommentSection.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  comment: PropTypes.string.isRequired,
  setComment: PropTypes.func.isRequired,
  commentContentRef: PropTypes.func.isRequired,
};
