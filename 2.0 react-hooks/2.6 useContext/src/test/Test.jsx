import ContainerTestContext from "./ContainerTestContext";
import GlobalTestStorage from "./GlobalTestStorage";
import UserCardTestContext from "./UserCard/UserCardTestContext";

const Test = () => {
  return (
    <GlobalTestStorage>
      <ContainerTestContext>
        <button>Carregar Usuários</button>
        <UserCardTestContext />
      </ContainerTestContext>
    </GlobalTestStorage>
  );
};

export default Test;
