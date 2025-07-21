import { useContext } from "react";
import DetailUserCardTestContext from "./DetailUserCardTestContext";
import HeaderUserCardTestContext from "./HeaderUserCardTestContext";
import SubscriptionUserCardTestContext from "./SubscriptionUserCardTestContext";
import WorkspaceUserCardTestContext from "./WorkspaceUserCardTestContext";
import GlobalTestContext from "../GlobalTestContext";

const UserCardTestContext = () => {
  const { handleLoadingApplicant, applicantList } =
    useContext(GlobalTestContext);

  return (
    <>
      <section>
        <h1>User list</h1>
      </section>
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "2rem",
        }}
      >
        {applicantList &&
          applicantList.map(item => (
            <>
              <div
                key={`list-${item.user.username}`}
                className="py-16 px-16 flex gap-16 flex-column brd-sm rds-md cursor-def"
              >
                <HeaderUserCardTestContext data={item} />
                <DetailUserCardTestContext data={item} />
                <SubscriptionUserCardTestContext data={item} />
                <WorkspaceUserCardTestContext data={item} />
              </div>
            </>
          ))}
      </section>
      <section>
        <button
          onClick={handleLoadingApplicant}
          className="color-neutral-dim py-8 px-16 brd-md rds-sm pointer"
        >
          Carregar usuários
        </button>
      </section>
    </>
  );
};

export default UserCardTestContext;
