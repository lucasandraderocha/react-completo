import React from "react";
import UserDetails from "./UserDetails";
import UserPosts from "./UserPosts";

const UserItem = ({ user }) => {
  return (
    <>
      <li>
        <p>{user.name}</p>
        <UserDetails details={user} />
        <UserPosts userData={user} />
      </li>
    </>
  );
};

export default UserItem;
