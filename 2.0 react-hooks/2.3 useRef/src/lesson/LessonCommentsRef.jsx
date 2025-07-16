import { useEffect, useRef, useState } from "react";

const LessonCommentsRef = () => {
  const [comments, setComments] = useState([]);
  const inputCommentRef = useRef(null);

  useEffect(() => {
    console.log(comments);
  }, [comments]);

  const handleAddCommentClick = () => {
    setComments([...comments, inputCommentRef.current.value]);
    inputCommentRef.current.focus();
    inputCommentRef.current.value = "";
  };
  return (
    <>
      <div>
        <h1>Lesson Comments ⁕ useRef</h1>
      </div>
      <div>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
      </div>
      <br />
      <div>
        <input ref={inputCommentRef} type="text" />
        <br />
        <button onClick={handleAddCommentClick}>Enviar</button>
      </div>
    </>
  );
};

export default LessonCommentsRef;
