import Container from "../../../components/Container";

import styles from "./Contato.module.css";

import foto from "../img/contato.jpg";
import Head from "./Head";

const Contato = () => {
  return (
    <>
      <Head
        title="Contato"
        description="Essa é a página sobre nossos contatos"
      />
      <Container className={`${styles.contato} animeLeft`}>
        <Container>
          <img src={foto} alt="Máquina de escrever" />
        </Container>
        <Container>
          <h1>Entre em Contato</h1>
          <ul className={styles.dados}>
            <li>Email ⇢ exemplo@email.com</li>
            <li>Telefone ⇢ +55 47 99999-9999</li>
            <li>Endereço ⇢ Rua Ali Perto, 999</li>
          </ul>
        </Container>
      </Container>
    </>
  );
};

export default Contato;
