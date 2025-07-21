import React from "react";

const DetailUserCardTestContext = ({ data }) => {
  const joinedDate = new Date(data.user.joined_at);
  return (
    <>
      <ul className="flex flex-column justify-center brd-sm py-16 px-16 h-fit w-full rds-sm">
        <li>Role: {data.user.role}</li>
        <li>
          Joined at:{" "}
          {`${joinedDate.toLocaleDateString(
            "pt-BR"
          )} às ${joinedDate.toLocaleTimeString("pt-BR", {
            hour: "2-digit",
            minute: "2-digit",
          })}`}
        </li>
      </ul>
    </>
  );
};

export default DetailUserCardTestContext;
