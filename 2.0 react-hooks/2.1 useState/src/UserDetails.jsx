import React from "react";

const UserDetails = ({ details }) => {
  const [active, setActive] = React.useState(false);
  const handleClickDetails = () => {
    setActive(!active);
  };
  return (
    <>
      <div style={{ margin: ".5rem 0" }}>
        <button
          style={{ padding: "0.25rem 1rem", borderRadius: "1rem" }}
          onClick={handleClickDetails}
        >
          +
        </button>
        {active && (
          <ul>
            <li>{details.email}</li>
            <li>{details.phone}</li>
            <li>{details.website}</li>
          </ul>
        )}
      </div>
    </>
  );
};

export default UserDetails;
