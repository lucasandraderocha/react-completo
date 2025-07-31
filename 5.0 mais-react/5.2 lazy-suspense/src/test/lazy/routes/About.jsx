import React from "react";
import Container from "../../../components/Container";

const About = () => {
  return (
    <>
      <Container className="flex flex-column gap-16 ">
        <section className="flex py-8 px-8 brd-sm rds-sm justify-center">
          <h1>About</h1>
        </section>
        <section className="flex py-8 px-8 brd-sm rds-sm justify-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam iste
          placeat nihil facilis, consequuntur reiciendis assumenda. Sapiente
          animi, neque veniam architecto, placeat molestias debitis porro
          voluptatibus similique, optio aliquam aliquid?
        </section>
      </Container>
    </>
  );
};

export default About;
