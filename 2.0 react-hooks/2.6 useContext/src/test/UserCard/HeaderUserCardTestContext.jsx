import React from "react";

const HeaderUserCardTestContext = ({ data }) => {
  return (
    <>
      <section className="color-neutral-halo flex flex-column align-center py-16 px-16 brd-sm rds-sm full">
        <img
          src={data.user.avatar_url}
          alt="foto do perfil do usuário"
          width="150"
          height="150"
        />
        <h3>{data.user.full_name}</h3>
        <h4>@{data.user.username}</h4>
      </section>
    </>
  );
};

export default HeaderUserCardTestContext;
