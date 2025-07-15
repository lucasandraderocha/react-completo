import React from "react";
import UserItem from "./UserItem";

const UserList = ({ userData }) => {
  if (!userData) return null;

  return (
    <>
      <div>
        <ul>
          {userData.map(user => (
            <>
              <UserItem user={user} />
            </>
          ))}
        </ul>
      </div>
    </>
  );
};

export default UserList;
