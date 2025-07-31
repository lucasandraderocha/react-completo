import Container from "../../../components/Container";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <footer>
        <Container className={styles.footer}>
          <p>Alguns direitos reservados</p>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
