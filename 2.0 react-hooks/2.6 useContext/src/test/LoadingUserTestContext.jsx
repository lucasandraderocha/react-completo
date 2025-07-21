import { useContext } from "react";
import GlobalTestContext from "./GlobalTestContext";

const LoadingUserTestContext = () => {
  const { handleLoadingApplicant } = useContext(GlobalTestContext);

  return (
    <>
      <section>
        <button
          onClick={handleLoadingApplicant}
          className="color-neutral-deep py-8 px-16 rds-sm typo-main pointer"
        >
          Carregar usuários
        </button>
      </section>
    </>
  );
};

export default LoadingUserTestContext;
