import Input from "./components/input/Input";
import Submit from "./components/submit/Submit";
import useForm from "./hooks/useForm";

const Form = () => {
  const cep = useForm("cep");
  const email = useForm("email");
  const nome = useForm();
  const sobrenome = useForm(false);

  const handleSubmit = e => {
    e.preventDefault();

    const validateAllFields = () => {
      return (
        cep.validate() &&
        email.validate() &&
        nome.validate &&
        sobrenome.validate()
      );
    };

    if (validateAllFields()) {
      console.log("Enviou");
    } else {
      console.log("Não Enviou");
    }
  };

  return (
    <>
      <div className="flex flex-column gap-8">
        <form
          onSubmit={handleSubmit}
          className="flex flex-column gap-8 py-24 px-24 brd-sm rds-sm"
        >
          <Input
            label="Nome↴"
            className="py-12 px-16 brd-sm rds-sm typo-main"
            id="nome"
            type="text"
            placeholder="João "
            {...nome}
          />
          {nome.error && (
            <div
              className="py-4 px-16 rds-sm"
              style={
                console.error === "Preencha um valor"
                  ? { background: "#f07f003d", color: "#f07b00" }
                  : { background: "#ff00003d", color: "#e54" }
              }
            >
              <p>{nome.error}</p>
            </div>
          )}
          <Input
            label="Sobrenome↴"
            className="py-12 px-16 brd-sm rds-sm typo-main"
            id="sobrenome"
            type="text"
            placeholder="da Silva Sauro"
            {...sobrenome}
          />
          <Input
            label="Email↴"
            className="py-12 px-16 brd-sm rds-sm typo-main"
            id="email"
            type="text"
            placeholder="example@email.here"
            {...email}
          />
          {email.error && (
            <div
              className="py-4 px-16 rds-sm"
              style={
                console.error === "Preencha um valor"
                  ? { background: "#f07f003d", color: "#f07b00" }
                  : { background: "#ff00003d", color: "#e54" }
              }
            >
              <p>{email.error}</p>
            </div>
          )}
          <Input
            label="CEP↴"
            className="py-12 px-16 brd-sm rds-sm typo-main"
            id="cep"
            type="text"
            placeholder="00000-000"
            {...cep}
          />
          {cep.error && (
            <div
              className="py-4 px-16 rds-sm"
              style={
                console.error === "Preencha um valor"
                  ? { background: "#f07f003d", color: "#f07b00" }
                  : { background: "#ff00003d", color: "#e54" }
              }
            >
              <p>{cep.error}</p>
            </div>
          )}
          <div className="flex flex-column gap-8 py-8 px-8 brd-sm rds-sm">
            <h1>Horti-frutti</h1>
            <Checkbox
              options={functionalLanguages}
              value={language}
              setValue={setLanguage}
            />
          </div>
          <div className="flex flex-column gap-8 py-8 px-8 brd-sm rds-sm">
            <h1>Horti-frutti</h1>
            <Radio options={foodOptions} value={food} setValue={setFood} />
          </div>
          <div className="flex flex-column gap-8 py-8 px-8 brd-sm rds-sm">
            <Select
              className="py-8 px-8 brd-sm rds-sm color-neutral-deep typo-main"
              value={product}
              onChange={({ target }) => setProduct(target.value)}
            >
              <Option value="" disabled>
                Selecione
              </Option>
              {["Smartphone", "Telefone", "Notebook", "PC", "iPhone"].map(
                produto => (
                  <Option key={produto} id={produto} value={produto}>
                    {produto}
                  </Option>
                )
              )}
            </Select>
            <Input
              label="Email↴"
              type="email"
              id="hi"
              className="py-8 px-8 brd-sm rds-sm color-neutral-soft typo-main"
            />
            <Input
              label="Senha↴"
              type="password"
              id="hi"
              className="py-8 px-8 brd-sm rds-sm color-neutral-soft typo-main"
            />
          </div>
          <Submit className="py-12 px-16 rds-sm typo-main color-primary pointer">
            Enviar
          </Submit>
        </form>
      </div>
    </>
  );
};

export default Form;
