import useLocalStorage from "./hooks/useLocalStorage";

const LocalStorageCustomHook = () => {
  const [fave, setFave] = useLocalStorage("product", "");

  const handleClick = ({ target }) => {
    setFave(target.innerText);
  };
  return (
    <>
      <div>
        <section>
          <h4 style={{ fontSize: "1.5rem", fontWeight: "normal" }}>Lesson</h4>
        </section>
        <section className="flex flex-row gap-8">
          <button
            className="py-24 px-32 color-neutral-deep typo-main pointer rds-md"
            onClick={handleClick}
          >
            Smartphone
          </button>
          <button
            className="py-24 px-32 color-neutral-deep typo-main pointer rds-md"
            onClick={handleClick}
          >
            Notebook
          </button>
        </section>
        <section>
          <h1>{fave}</h1>
        </section>
      </div>
    </>
  );
};

export default LocalStorageCustomHook;
