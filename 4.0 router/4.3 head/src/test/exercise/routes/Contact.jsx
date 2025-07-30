import Container from "../../../components/Container";
import Image from "../../../components/Image";
import Head from "../Head";

const Contact = () => {
  return (
    <>
      <Head id="Contato" />
      <Container className="flex align-center gap-16">
        <Container className="flex-1">
          <Image
            height={500}
            width={350}
            src="https://images.unsplash.com/photo-1417325384643-aac51acc9e5d"
          />
        </Container>
        <Container className="flex-1">
          <h1>Entre em contato</h1>
          <p>contato@mail.com</p>
          <p>+55 47 99999-9999</p>
        </Container>
      </Container>
    </>
  );
};

export default Contact;
