import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("Fez o login!");
    navigate("/");
  };

  return (
    <>
      <main className="flex flex-column gap-8">
        <section className="py-16 px-16 rds-sm brd-sm text-center">
          <h1>Login</h1>
        </section>
        <section>
          <div className="flex flex-column py-8 px-8 brd-sm rds-sm flex-1 align-center justify-center pointer color-neutral-soft">
            <button
              onClick={handleClick}
              className="py-16 px-32 w-fit color-neutral-deep rds-sm typo-main pointer"
            >
              Login
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Login;
