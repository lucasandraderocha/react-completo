import Container from "../../../components/Container";
import AdminButton from "../components/AdminButton";
import CounterButton from "../components/CounterButton";

const Home = () => {
  return (
    <>
      <Container className="flex flex-column justify-center align-center gap-16 brd-sm rds-sm py-8 px-8">
        <section className="flex py-8 px-8 brd-sm rds-sm justify-center">
          <h1>home</h1>
        </section>
        <CounterButton />
        <AdminButton />
      </Container>
    </>
  );
};

export default Home;
