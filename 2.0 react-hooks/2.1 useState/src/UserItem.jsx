import React from "react";

const UserItem = ({ data }) => {
  return (
    <>
      <ul>
        {data.map(({ name }) => {
          <li>
            <div>
              <p>{name}</p>
            </div>
          </li>;
        })}
      </ul>
    </>
  );
};

export default UserItem;
