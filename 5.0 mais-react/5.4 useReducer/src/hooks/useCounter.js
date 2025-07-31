const useCounter = setCounter => {
  const handleCount = ({ target }) => {
    const operation = {
      add: state => state + 1,
      sub: state => state - 1,
      multi: state => state * 2,
      divide: state => state / 2,
      square: state => state * state,
    };

    const handler = operation[target.id];
    if (handler) {
      setCounter(handler);
    }
  };

  return { handleCount };
};

export default useCounter;
