import { useState, useRef, useEffect } from "react";
import "./CommentSection.scss";
import PropTypes from "prop-types";

function CommentSection({ comment, setComment, decisionId, user }) {
  const commentContentRef = useRef(null);
  const [allComments, setAllComments] = useState([]);
  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/decisions/${decisionId}/comments`
    )
      .then((response) => response.json())
      .then((data) => setAllComments(data))
      .catch((err) => console.error(err));
  }, [comment]);
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `${
          import.meta.env.VITE_BACKEND_URL
        }/api/decisions/${decisionId}/comments`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            commentContent: commentContentRef.current.value,
            userId: user[0].user_id,
          }),
        }
      );
      if (response.status === 201) {
        setComment("");
      }
    } catch (err) {
      console.error("Error", err);
    }
  };

  const onChangeHandler = (event) => {
    setComment(event.target.value);
  };

  const onClickHandler = () => {
    if (comment.trim() !== "") {
      setAllComments((comments) => [...comments, comment]);
    }
  };
  return (
    <section className="commentSection">
      <h2 className="commentSection__title">Commentaires</h2>
      <section className="commentSection__container">
        <section className="commentSection__comment--container">
          {allComments.map((com) => (
            <section
              key={com.comment_id}
              className="commentSection__comment--assembly"
            >
              <img
                className="commentSection__comment--avatar"
                src={com.picture}
                alt="avatar"
              />
              <section className="commentSection__comment--box">
                <section className="commentSection__comment__textSection">
                  <h4 className="commentSection__comment--name">
                    {com.firstname} {com.lastname} (
                    {com.role === null ? "Visiteur" : com.role})
                  </h4>
                  <p className="commenSection__comment--dateTime">
                    {com.short_date}
                  </p>
                  <p>{[com.comment_content]}</p>
                </section>
              </section>
            </section>
          ))}
        </section>
        <hr className="dividing__line" />
        <form
          method="post"
          onSubmit={handleSubmit}
          className="commentSection__input--field"
        >
          <textarea
            value={comment}
            placeholder="Rédigez un commentaire..."
            onChange={onChangeHandler}
            className="commentSection__textarea"
            ref={commentContentRef}
          />
          <button
            onClick={onClickHandler}
            type="submit"
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
  user: PropTypes.arrayOf(
    PropTypes.shape({
      admin_id: PropTypes.number.isRequired,
      email: PropTypes.string.isRequired,
      firstname: PropTypes.string.isRequired,
      hashed_password: PropTypes.string.isRequired,
      lastname: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
      user_id: PropTypes.number.isRequired,
    })
  ).isRequired,
  decisionId: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
  setComment: PropTypes.func.isRequired,
};
