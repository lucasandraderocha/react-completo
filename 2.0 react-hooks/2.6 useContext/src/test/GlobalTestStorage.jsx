import { useState } from "react";

import GlobalTestContext from "./GlobalTestContext";

const GlobalTestStorage = ({ children }) => {
  const [applicantList, setApplicantList] = useState([]);

  return (
    <GlobalTestContext.Provider value={{ applicantList, setApplicantList }}>
      {children}
    </GlobalTestContext.Provider>
  );
};

export default GlobalTestStorage;
