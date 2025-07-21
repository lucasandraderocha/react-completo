import { useEffect } from "react";
import useFetch from "./hooks/useFetch";
import EmptyStateForRequestUseFetch from "./EmptyStateForRequestUseFetch";
import ErrorStateForRequestUseFetch from "./ErrorStateForRequestUseFetch";

const RequestUseFetchCustomHook = () => {
  const { data, request, loading, error } = useFetch();

  useEffect(() => {
    const fetchData = async () => {
      const { res, json } = await request(
        "https://ranekapi.origamid.dev/json/api/produto/"
      );
      return res, json;
    };
    fetchData();
  }, []);

  const handleCurrency = value => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };
  return (
    <>
      {error ? (
        <ErrorStateForRequestUseFetch />
      ) : (
        <section>
          {loading ? (
            <EmptyStateForRequestUseFetch />
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: "1rem",
              }}
            >
              {data &&
                data.map(product => (
                  <div
                    key={product.id}
                    className="py-16 px-16 flex flex-column gap-8 brd-sm  rds-sm"
                  >
                    <img
                      src={product.fotos[0].src}
                      alt="foto do produto"
                      width="100%"
                    />
                    <h4 style={{ fontWeight: "500", fontSize: "1.5rem" }}>
                      {product.nome}
                    </h4>
                    <p>{handleCurrency(product.preco)}</p>
                    <button className="py-24 px-24 rds-md color-neutral-deep typo-main pointer">
                      Adicionar
                    </button>
                  </div>
                ))}
            </div>
          )}
        </section>
      )}
    </>
  );
};

export default RequestUseFetchCustomHook;
