import { useState, useMemo } from "react";

// ========================================
// ATIVIDADE 2: Calculadora de Estatísticas
// ========================================

const StatisticsCalculator = () => {
  const [numbers, setNumbers] = useState([10, 20, 30, 40, 50]);
  const [newNumber, setNewNumber] = useState("");
  const [displayMode, setDisplayMode] = useState("basic");
  const [refreshCount, setRefreshCount] = useState(0); // Estado que força re-renders

  // PROBLEMA: Estes cálculos complexos estão sendo executados
  // a cada renderização, mesmo quando 'numbers' não mudou
  const calculateBasicStats = useMemo(() => {
    console.log("🔢 Calculando estatísticas básicas...");

    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = sum / numbers.length;
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    const range = max - min;

    return { sum, average, min, max, range };
  }, [numbers]);

  const calculateAdvancedStats = useMemo(() => {
    console.log("📊 Calculando estatísticas avançadas...");

    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = sum / numbers.length;

    // Cálculos mais complexos
    const variance =
      numbers.reduce((acc, num) => {
        return acc + Math.pow(num - average, 2);
      }, 0) / numbers.length;

    const standardDeviation = Math.sqrt(variance);

    const sortedNumbers = [...numbers].sort((a, b) => a - b);
    const median =
      sortedNumbers.length % 2 === 0
        ? (sortedNumbers[sortedNumbers.length / 2 - 1] +
            sortedNumbers[sortedNumbers.length / 2]) /
          2
        : sortedNumbers[Math.floor(sortedNumbers.length / 2)];

    // Simulando processamento pesado
    const percentiles = {};
    [25, 50, 75, 90, 95].forEach(p => {
      const index = Math.ceil((p / 100) * sortedNumbers.length) - 1;
      percentiles[`p${p}`] = sortedNumbers[index] || 0;
    });

    return {
      variance,
      standardDeviation,
      median,
      percentiles,
    };
  }, [numbers]);

  const basicStats = calculateBasicStats;
  const advancedStats = calculateAdvancedStats;

  const addNumber = () => {
    const num = parseFloat(newNumber);
    if (!isNaN(num)) {
      setNumbers(prev => [...prev, num]);
      setNewNumber("");
    }
  };

  const removeNumber = index => {
    setNumbers(prev => prev.filter((_, i) => i !== index));
  };

  const resetNumbers = () => {
    setNumbers([10, 20, 30, 40, 50]);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">
          📈 Atividade 2: Calculadora de Estatísticas
        </h2>

        <div className="bg-blue-50 border border-blue-200 rounded p-4 mb-4">
          <h3 className="font-semibold mb-2">🎯 Objetivo:</h3>
          <p className="text-sm">
            Otimize os cálculos estatísticos usando useMemo. Observe no console
            que os cálculos são executados mesmo quando apenas 'displayMode' ou
            'refreshCount' mudam.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Adicionar número:
            </label>
            <div className="flex gap-2">
              <input
                type="number"
                value={newNumber}
                onChange={e => setNewNumber(e.target.value)}
                placeholder="Digite um número"
                className="flex-1 p-2 border rounded"
              />
              <button
                onClick={addNumber}
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                Adicionar
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Modo de exibição:
            </label>
            <select
              value={displayMode}
              onChange={e => setDisplayMode(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="basic">Básico</option>
              <option value="advanced">Avançado</option>
              <option value="both">Ambos</option>
            </select>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setRefreshCount(prev => prev + 1)}
              className="bg-orange-500 text-white px-4 py-2 rounded"
            >
              Atualizar Tela ({refreshCount})
            </button>
            <button
              onClick={resetNumbers}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Reset
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white border rounded p-4">
          <h3 className="font-semibold mb-3">Números ({numbers.length})</h3>
          <div className="flex flex-wrap gap-2">
            {numbers.map((num, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded cursor-pointer hover:bg-red-100 hover:text-red-800"
                onClick={() => removeNumber(index)}
                title="Clique para remover"
              >
                {num}
              </span>
            ))}
          </div>
        </div>

        {(displayMode === "basic" || displayMode === "both") && (
          <div className="bg-green-50 border border-green-200 rounded p-4">
            <h3 className="font-semibold mb-3">📊 Estatísticas Básicas</h3>
            <div className="space-y-2 text-sm">
              <p>
                <strong>Soma:</strong> {basicStats.sum}
              </p>
              <p>
                <strong>Média:</strong> {basicStats.average.toFixed(2)}
              </p>
              <p>
                <strong>Mínimo:</strong> {basicStats.min}
              </p>
              <p>
                <strong>Máximo:</strong> {basicStats.max}
              </p>
              <p>
                <strong>Amplitude:</strong> {basicStats.range}
              </p>
            </div>
          </div>
        )}

        {(displayMode === "advanced" || displayMode === "both") && (
          <div className="bg-purple-50 border border-purple-200 rounded p-4">
            <h3 className="font-semibold mb-3">🔬 Estatísticas Avançadas</h3>
            <div className="space-y-2 text-sm">
              <p>
                <strong>Variância:</strong> {advancedStats.variance.toFixed(2)}
              </p>
              <p>
                <strong>Desvio Padrão:</strong>{" "}
                {advancedStats.standardDeviation.toFixed(2)}
              </p>
              <p>
                <strong>Mediana:</strong> {advancedStats.median}
              </p>
              <div>
                <strong>Percentis:</strong>
                <ul className="ml-4 mt-1">
                  <li>25%: {advancedStats.percentiles.p25}</li>
                  <li>50%: {advancedStats.percentiles.p50}</li>
                  <li>75%: {advancedStats.percentiles.p75}</li>
                  <li>90%: {advancedStats.percentiles.p90}</li>
                  <li>95%: {advancedStats.percentiles.p95}</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatisticsCalculator;
