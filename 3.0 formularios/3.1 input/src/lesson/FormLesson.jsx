import { useState } from "react";

const FormLesson = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = e => {
    e.preventDefault();
  };
  const handleChange = ({ target }) => {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
    console.log(form);
  };

  return (
    <>
      <section className="flex flex-column gap-16 w-fit py-16 px-16 brd-sm rds-md">
        <h1>Login on your account 🤩</h1>
        <form className="flex flex-column gap-8" onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            value={form.username}
            id="username"
            onChange={handleChange}
            className="py-8 px-8 brd-sm rds-sm color-neutral-soft"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={form.password}
            id="password"
            autoComplete="false"
            onChange={handleChange}
            className="py-8 px-8 brd-sm rds-sm color-neutral-soft"
          />
          <button className="py-16 px-32 rds-sm color-neutral-dim pointer">
            Enviar
          </button>
        </form>
      </section>
    </>
  );
};

export default FormLesson;
