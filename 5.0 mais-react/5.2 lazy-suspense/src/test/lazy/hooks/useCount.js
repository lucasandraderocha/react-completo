const useCount = setCounter => {
  const handleClick = ({ target }) => {
    const operation = {
      adicionar: state => state + 1,
      diminuir: state => state - 1,
      multiplicar: state => state * 2,
    };

    const handler = operation[target.id];

    if (handler) {
      return setCounter(handler);
    }
  };
  return { handleClick };
};

export default useCount;
