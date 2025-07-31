import Container from "../../../components/Container";
import Image from "../../../components/Image";

const Contact = () => {
  return (
    <>
      <Container className="flex flex-column gap-16 ">
        <section className="flex py-8 px-8 brd-sm rds-sm justify-center">
          <h1>Contact</h1>
        </section>
        <section className="flex gap-8 py-8 px-8 brd-sm rds-sm justify-center">
          <Container className="py-8 px-8 brd-sm rds-sm flex-1">
            <Image
              src="https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=1080&fit=max"
              width={"100%"}
              height={500}
            />
          </Container>
          <Container className="flex flex-column gap-8 align-center justify-center py-8 px-8 brd-sm rds-sm flex-1">
            <h3>Entre em contato</h3>
            <p>Email ⇢ exemplo@contat.com</p>
            <p>Whatsapp ⇢ +55 32 9 99999-9999</p>
            <p>Endereço ⇢ Rua logo alí, 111</p>
          </Container>
        </section>
      </Container>
    </>
  );
};

export default Contact;
