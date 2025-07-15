import React from "react";
import UserList from "./UserList";

const Tutor = () => {
  const [data, setData] = React.useState(null);

  const handleUserLoad = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const json = await res.json();
    setData(json);
    console.log(json);
  };
  return (
    <>
      <fieldset>
        <header>
          <h1 style={{ color: "#283618" }}>User list</h1>
        </header>
        <main>
          <UserList userData={data} />
        </main>
        <section>
          <button onClick={handleUserLoad}>Load</button>
        </section>
      </fieldset>
    </>
  );
};

export default Tutor;
