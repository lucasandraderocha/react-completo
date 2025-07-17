import { useState } from "react";
import StatisticsCalculator from "./StatisticsCalculator";
import ProductSearch from "./ProductSearch";
// ========================================
// COMPONENTE PRINCIPAL
// ========================================

export default function UseMemoExercises() {
  const [currentActivity, setCurrentActivity] = useState(1);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto p-4">
          <h1 className="text-3xl font-bold text-center mb-4">
            🎯 Atividades Práticas: useMemo
          </h1>

          <div className="flex justify-center gap-4 mb-4">
            <button
              onClick={() => setCurrentActivity(1)}
              className={`px-6 py-2 rounded ${
                currentActivity === 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Atividade 1
            </button>
            <button
              onClick={() => setCurrentActivity(2)}
              className={`px-6 py-2 rounded ${
                currentActivity === 2
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Atividade 2
            </button>
          </div>

          <div className="bg-red-50 border border-red-200 rounded p-4 mb-4">
            <h2 className="font-semibold text-red-800 mb-2">📋 Instruções:</h2>
            <ul className="text-sm text-red-700 space-y-1">
              <li>• Abra o console do navegador (F12)</li>
              <li>• Observe quando as funções são executadas</li>
              <li>• Use os botões de "força re-render" para ver o problema</li>
              <li>• Implemente useMemo nos locais apropriados</li>
              <li>• Teste novamente para ver a otimização</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="py-6">
        {currentActivity === 1 && <ProductSearch />}
        {currentActivity === 2 && <StatisticsCalculator />}
      </div>
    </div>
  );
}
