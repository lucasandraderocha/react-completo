import { useEffect, useState } from "react";

const Loading = ({ loadingState, stepIcon, children }) => {
  const [animationStep, setAnimationStep] = useState(stepIcon);

  useEffect(() => {
    if (!loadingState) return;

    let intervalAnimation = setInterval(() => {
      setAnimationStep(prev => (prev.length >= 5 ? stepIcon : prev + stepIcon));
    }, 152);

    return () => clearInterval(intervalAnimation);
  }, [loadingState, stepIcon]);

  return (
    <>
      <div
        style={{
          display: "grid",
          gridColumn: "2/ 4",
          alignSelf: "center",
          justifySelf: "stretch",
        }}
      >
        <div className="flex w-full align-center justify-center">
          {children}
        </div>
        <p className="flex w-full align-center justify-center">
          {animationStep}
        </p>
      </div>
    </>
  );
};

export default Loading;
