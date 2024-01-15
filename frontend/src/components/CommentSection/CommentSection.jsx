import { useState, useEffect } from "react";
import { useDecisionContext } from "../../contexts/decisionContext";
import "./CommentSection.scss";

function CommentSection() {
  const { decisionId } = useDecisionContext();
  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState([]);
  /*   const [fetchedComments, setFetchedComments] = useState([0]); */
  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/decisions/${decisionId}/comments`
    )
      .then((response) => response.json())
      .then((data) => setComment(data))
      .catch((error) => console.error(error));
  }, [decisionId]);

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
            onKeyDown={handlePress}
            onChange={onChangeHandler}
            className="commentSection__textarea"
          />
          <button
            onClick={onClickHandler}
            type="button"
            className="comment__button"
          >
            Commenter
          </button>
        </section>
      </section>
    </section>
  );
}

export default CommentSection;
