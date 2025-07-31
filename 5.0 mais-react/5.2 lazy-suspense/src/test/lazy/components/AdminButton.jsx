import { useState } from "react";
import Container from "../../../components/Container";
import Button from "../../../components/Button";

const AdminButton = () => {
  const [turnAdmin, setTurnAdmin] = useState(false);
  return (
    <>
      <Container className="flex flex-column gap-8 align-center ">
        {turnAdmin ? (
          <p className="typo-body animeBottom">Você é um usuário normal 👨‍💼</p>
        ) : (
          <p className="typo-body animeBottom">Você é um Admin 👨‍💻 </p>
        )}

        <Button
          onClick={() => setTurnAdmin(!turnAdmin)}
          className="py-8 px-16 h-fit rds-sm pointer color-neutral-deep typo-body w-fit"
        >
          {turnAdmin ? "Tornar usuário" : "Tornar Admin"}
        </Button>
      </Container>
    </>
  );
};

export default AdminButton;
