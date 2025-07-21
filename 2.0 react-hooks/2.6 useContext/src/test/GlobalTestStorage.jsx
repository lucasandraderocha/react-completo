import { useState } from "react";

import GlobalTestContext from "./GlobalTestContext";
const GlobalTestStorage = ({ children }) => {
  const [applicantList, setApplicantList] = useState([]);

  const handleLoadingApplicant = async () => {
    await fetch("./ApplicantList.json")
      .then(res => res.json())
      .then(json => setApplicantList(json));
  };

  return (
    <GlobalTestContext.Provider
      value={{ applicantList, setApplicantList, handleLoadingApplicant }}
    >
      {children}
    </GlobalTestContext.Provider>
  );
};

export default GlobalTestStorage;
