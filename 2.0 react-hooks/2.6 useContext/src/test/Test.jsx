import ContainerTestContext from "./ContainerTestContext";
import UserCardTestContext from "./UserCard/UserCardTestContext";
import GlobalTestStorage from "./GlobalTestStorage";
import LoadingUserTestContext from "./LoadingUserTestContext";
const Test = () => {
  return (
    <GlobalTestStorage>
      <ContainerTestContext>
        <LoadingUserTestContext />
        <UserCardTestContext />
      </ContainerTestContext>
    </GlobalTestStorage>
  );
};

export default Test;
