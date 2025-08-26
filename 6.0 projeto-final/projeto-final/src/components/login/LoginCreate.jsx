import { POST_USER } from "../../api";

import useForm from "./hooks/useForm";

import Button from "../form/Button";
import Input from "../form/Input";
import Label from "../form/Label";
import useFetch from "../../hooks/useFetch";
import Error from "../helper/Error";

const LoginCreate = () => {
  const username = useForm();
  const email = useForm("email");
  const password = useForm();

  const { loading, error, request } = useFetch();
  const handleSubmit = async e => {
    e.preventDefault();
    const { url, options } = POST_USER({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    const { res } = await request(url, options);

    console.log(res);
  };

  return (
    <>
      <section>
        <div className="animeLeft">
          <h1 className="title">Cadastre-se</h1>
          <form onSubmit={handleSubmit}>
            <Label>
              <p>Usuário</p>
              <Input
                type="text"
                value={username.value}
                onChange={username.onChange}
                onBlur={username.onBlur}
                error={username.error}
              />
            </Label>
            <Label>
              <p>Email</p>
              <Input
                type="email"
                value={email.value}
                onChange={email.onChange}
                onBlur={email.onBlur}
                error={email.error}
              />
            </Label>
            <Label>
              <p>Senha</p>
              <Input
                type="password"
                value={password.value}
                onChange={password.onChange}
                onBlur={password.onBlur}
                error={password.error}
              />
            </Label>
            {loading ? (
              <Button>Cadastrando...</Button>
            ) : (
              <Button>Cadastrar-se</Button>
            )}
            <Error error={error} />
          </form>
        </div>
      </section>
    </>
  );
};

export default LoginCreate;
