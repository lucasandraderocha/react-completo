const useCurrencyFormat = () => {
  const handlePrice = value => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };
  return { handlePrice };
};

export default useCurrencyFormat;
