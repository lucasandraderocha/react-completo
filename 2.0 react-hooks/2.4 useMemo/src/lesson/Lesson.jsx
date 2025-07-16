import { useMemo, useState } from "react";

const tookAMoment = () => {
  let c;
  for (let i = 0; i < 1e8; i++) {
    c = i + i / 10;
  }

  return c;
};

const Lesson = () => {
  const [count, setCount] = useState(0);

  let p = performance.now();
  const value = useMemo(() => tookAMoment(), []);

  console.log(value);
  console.log(performance.now() - p);
  return (
    <>
      <h1>Lesson</h1>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </>
  );
};

export default Lesson;
