import { useState } from "react";
import "./CommentSection.scss";

function CommentSection() {
  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState([]);

  const onChangeHandler = (event) => {
    setComment(event.target.value);
  };
  const onClickHandler = () => {
    setCommentList((comments) => [...comments, comment]);
    setComment("");
  };
  const handlePress = (e) => {
    if (e.key === "Enter") {
      onClickHandler();
      e.preventDefault();
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
                alt="avatar de l'auteur du commentaire"
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
        <section className="commentSection__input--field">
          <textarea
            value={comment}
            placeholder="Rédigez un commentaire..."
            onKeyDown={handlePress}
            onChange={onChangeHandler}
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
