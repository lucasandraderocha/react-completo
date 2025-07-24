import { useState } from "react";

import ExerciseContext from "./ExerciseContext";

const ExerciseStorage = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  return (
    <ExerciseContext.Provider
      value={{
        loading,
        setLoading,
        status,
        setStatus,
      }}
    >
      {children}
    </ExerciseContext.Provider>
  );
};

export default ExerciseStorage;
