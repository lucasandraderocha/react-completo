import { useState, useMemo } from "react";

// Base de dados simulada
const products = [
  { id: 1, name: "Smartphone Samsung", price: 1200, category: "electronics" },
  { id: 2, name: "Notebook Dell", price: 2500, category: "electronics" },
  { id: 3, name: "Headphone Sony", price: 300, category: "electronics" },
  { id: 4, name: "Mesa de Escritório", price: 450, category: "furniture" },
  { id: 5, name: "Cadeira Ergonômica", price: 800, category: "furniture" },
  { id: 6, name: "Livro JavaScript", price: 50, category: "books" },
  { id: 7, name: "Livro React", price: 60, category: "books" },
  { id: 8, name: "Monitor 24pol", price: 600, category: "electronics" },
  { id: 9, name: "Teclado Mecânico", price: 200, category: "electronics" },
  { id: 10, name: "Estante de Livros", price: 350, category: "furniture" },
];

const ProductSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState("all");
  const [category, setCategory] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const [counter, setCounter] = useState(0); // Estado que força re-renders

  // PROBLEMA: Esta função está sendo executada a cada renderização
  // mesmo quando os filtros não mudaram
  // CONCLUÍDO
  const getFilteredAndSortedProducts = useMemo(() => {
    console.log("🔄 Executando filtros e ordenação...");

    let filtered = products;

    // Filtro por termo de busca
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filtro por categoria
    if (category !== "all") {
      filtered = filtered.filter(product => product.category === category);
    }

    // Filtro por faixa de preço
    if (priceRange !== "all") {
      switch (priceRange) {
        case "cheap":
          filtered = filtered.filter(product => product.price < 200);
          break;
        case "medium":
          filtered = filtered.filter(
            product => product.price >= 200 && product.price < 800
          );
          break;
        case "expensive":
          filtered = filtered.filter(product => product.price >= 800);
          break;
      }
    }

    // Ordenação
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        default:
          return 0;
      }
    });

    return filtered;
  }, [category, priceRange, searchTerm, sortBy]);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">
          🛍️ Atividade 1: Sistema de Busca de Produtos
        </h2>

        <div className="bg-yellow-50 border border-yellow-200 rounded p-4 mb-4">
          <h3 className="font-semibold mb-2">🎯 Objetivo:</h3>
          <p className="text-sm">
            Otimize a função de filtros e ordenação usando useMemo. Observe no
            console que ela executa a cada mudança do counter, mesmo quando os
            filtros não mudaram.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1">Buscar:</label>
            <input
              type="text"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              placeholder="Nome do produto..."
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Categoria:</label>
            <select
              value={category}
              onChange={e => setCategory(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="all">Todas</option>
              <option value="electronics">Eletrônicos</option>
              <option value="furniture">Móveis</option>
              <option value="books">Livros</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Preço:</label>
            <select
              value={priceRange}
              onChange={e => setPriceRange(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="all">Todos</option>
              <option value="cheap">Até R$ 200</option>
              <option value="medium">R$ 200 - R$ 800</option>
              <option value="expensive">Acima de R$ 800</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Ordenar:</label>
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="name">Nome</option>
              <option value="price-low">Preço (menor)</option>
              <option value="price-high">Preço (maior)</option>
            </select>
          </div>
        </div>

        <button
          onClick={() => setCounter(prev => prev + 1)}
          className="bg-red-500 text-white px-4 py-2 rounded mb-4"
        >
          Força Re-render (Counter: {counter})
        </button>
      </div>

      <div className="bg-white border rounded p-4">
        <h3 className="font-semibold mb-3">
          Resultados ({getFilteredAndSortedProducts.length} produtos
          encontrados)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {getFilteredAndSortedProducts.map(product => (
            <div key={product.id} className="border rounded p-3">
              <h4 className="font-medium">{product.name}</h4>
              <p className="text-green-600 font-semibold">R$ {product.price}</p>
              <p className="text-sm text-gray-500 capitalize">
                {product.category}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSearch;
