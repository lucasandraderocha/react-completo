import ContainerTestContext from "./ContainerTestContext";
import GlobalTestStorage from "./GlobalTestStorage";

const Test = () => {
  return (
    <GlobalTestStorage>
      <ContainerTestContext></ContainerTestContext>
    </GlobalTestStorage>
  );
};

export default Test;
