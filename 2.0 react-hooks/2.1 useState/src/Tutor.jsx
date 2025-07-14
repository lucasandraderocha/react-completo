import React from "react";
import UserItem from "./UserItem";

const Tutor = () => {
  const [user, setUser] = React.useState(null);
  const handleClick = async () => {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    let users = await res.json();
    setUser(users);
  };
  console.log(user);
  return (
    <>
      <UserItem data={user} />
      <button onClick={handleClick}>User</button>
    </>
  );
};

export default Tutor;
