import { Route, Routes } from "react-router-dom";
import UserHeader from "./UserHeader";
import Feed from "../feed/Feed";
import UserPhotoPost from "./UserPhotoPost";
import UserStats from "./UserStats";
import { useContext } from "react";
import UserContext from "../../UserContext";

const User = () => {
  const { data } = useContext(UserContext);
  return (
    <>
      <section className="container">
        <UserHeader />
        <Routes>
          <Route path="/" element={<Feed user={data.id} />} />
          <Route path="/post" element={<UserPhotoPost />} />
          <Route path="/stats" element={<UserStats />} />
        </Routes>
      </section>
    </>
  );
};

export default User;
