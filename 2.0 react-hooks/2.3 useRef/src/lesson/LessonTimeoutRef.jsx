import React, { useEffect, useRef, useState } from "react";

const LessonTimeoutRef = () => {
  const [cart, setCart] = useState(0);
  const [message, setMessage] = useState([]);
  const inputCartRef = useRef(0);
  const timeoutRef = useRef(null);
  const handleAddCartClick = () => {
    setCart(cart + 1);
    inputCartRef.current++;
  };

  useEffect(() => {
    if (!cart) return;
    setMessage([...message, `Seu item foi adicionado. Total: ${cart}`]);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setMessage([]);
      console.log(message);
    }, 2000);
  }, [cart]);

  return (
    <>
      <div>
        <h1>Lesson Timeout ⁕ useRef</h1>
      </div>
      <ul>
        {message && (
          <div>
            {message.map((message, index) => (
              <li key={index}>{message}</li>
            ))}
          </div>
        )}
      </ul>
      <br />
      <section>
        <div>
          <span>Carrinho:</span>
          <span>{inputCartRef.current}</span>
        </div>
      </section>
      <br />
      <section>
        <button onClick={handleAddCartClick}>Adicionar ao carrinho</button>
      </section>
    </>
  );
};

export default LessonTimeoutRef;
