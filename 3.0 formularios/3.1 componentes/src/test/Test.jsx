import { useState } from "react";
import Input from "./components/form/input/Input";
import Option from "./components/form/options/Option";
import Select from "./components/form/select/Select";
import Radio from "./components/form/radio/Radio";
import Checkbox from "./components/form/checkbox/Checkbox";
import Submit from "./components/Submit";

let functionalLanguages = ["Haskell", "Clojure", "Elixir", "F#", "OCaml"];
let foodOptions = ["Frutas", "Legumes", "Verduras", "Hortaliças", "Ervas"];

const Test = () => {
  const [product, setProduct] = useState("");
  const [food, setFood] = useState("");
  const [cep, setCep] = useState("");
  const [error, setError] = useState(null);
  const [language, setLanguage] = useState([]);

  const validateCep = value => {
    const regex = /^\d{5}-?\d{3}$/;
    if (value.length === 0) {
      let e = new Error("Preencha um valor...");
      setError(e.message);
      return false;
    } else if (!regex.test(value)) {
      let e = new Error("Preencha um CEP Válido");
      setError(e.message);
      return false;
    } else {
      setError(null);
      return true;
    }
  };

  const handleBlur = ({ target }) => {
    validateCep(target.value);
  };
  const handleChange = ({ target }) => {
    if (error) validateCep(target.value);
    setCep(target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (validateCep(cep)) {
      console.log("Enviou");
    } else {
      console.log("Não Enviou");
    }
  };

  return (
    <>
      <div
        style={{
          gridColumn: "2/4",
        }}
        className="flex flex-column gap-8"
      >
        <form
          onSubmit={handleSubmit}
          className="flex flex-column gap-8 py-8 px-8 brd-sm rds-sm"
        >
          <Input
            label="CEP↴"
            className="py-12 px-16 brd-sm rds-sm typo-main"
            value={cep}
            id="cep"
            onChange={handleChange}
            onBlur={handleBlur}
            maxLength="9"
            placeholder="ex.: 00000-000"
          />
          {error && (
            <div
              className="py-4 px-16 rds-sm"
              style={
                error === "Preencha um valor"
                  ? { background: "#f07f003d", color: "#f07b00" }
                  : { background: "#ff00003d", color: "#e54" }
              }
            >
              <p>{error}</p>
            </div>
          )}
          <Submit className="py-12 px-16 rds-sm typo-main color-primary pointer">
            Enviar
          </Submit>
        </form>
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
      </div>
    </>
  );
};

export default Test;
