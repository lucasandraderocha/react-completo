import { useMemo, useState } from "react";

const array = Array.from({ length: 100 }, (_, i) => Number(i + 1));

const ListedItems = () => {
  const [list, setList] = useState([]);
  const [sortBy, setSortBy] = useState("asc");
  const handleSetList = () => {
    setList([...array]);
  };
  const processedList = useMemo(() => {
    console.log("processando...");
    if (sortBy === "desc") return [...list].sort((a, b) => b - a);
    return [...list].sort((a, b) => a - b);
  }, [list, sortBy]);
  console.log(list);
  return (
    <>
      <div>
        <h1>List With Memo</h1>
        <button onClick={handleSetList}>Gerar lista</button>
        <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
        </select>
        <ul>
          {processedList.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ListedItems;
