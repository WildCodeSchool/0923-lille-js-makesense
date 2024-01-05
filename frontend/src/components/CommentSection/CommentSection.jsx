import { useState } from "react";
import "./CommentSection.scss";

function CommentSection() {
  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState([]);

  const onChangHandler = (event) => {
    setComment(event.target.value);
  };
  const onClickHandler = () => {
    setCommentList((comments) => [...comments, comment]);
    setComment("");
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
            <section className="commentSection__comment--montage">
              <img
                className="commentSection__comment--avatar"
                src="src/assets/vincent.png"
                alt="avatar de l'auteur du comentaire"
              />
              <section className="commentSection__comment--box">
                <section className="commentSection__comment--textSection">
                  <h4 className="commentSection__comment--name">
                    Vincent rousseau (expert)
                  </h4>
                  <p>{com}</p>
                </section>
              </section>
            </section>
          ))}
        </section>
        <hr />
        <section className="commentSection__input__field">
          <textarea
            value={comment}
            onKeyDown={handlePress}
            onChange={onChangHandler}
            className="commentSection__textarea"
          />
          <button
            onClick={onClickHandler}
            type="button"
            className="comment__button"
          >
            Envoyer
          </button>
        </section>
      </section>
    </section>
  );
}

export default CommentSection;
