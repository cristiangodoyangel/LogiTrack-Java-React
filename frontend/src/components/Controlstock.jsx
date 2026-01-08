import { useState } from "react";

function Controlstock() {
  const [stock, setStock] = useState(10);

  return (
    <div className="p-8 bg-white rounded-lg shadow-xl border-t-4 border-slate-700">
      <h2 className="text-xl font-bold mb-4">📦 Control de Inventario</h2>
      <p className="text-4xl font-black text-slate-900 mb-6">{stock} <span className="text-sm text-slate-400">unidades</span></p>
      
      <div className="flex gap-4">
        <button 
          onClick={() => setStock(stock + 5)}
          className="bg-sky-600 text-white px-4 py-2 rounded font-bold hover:bg-sky-700"
        >
          AÑADIR (+5)
        </button>
        
        <button 
          onClick={() => stock > 0 && setStock(stock - 3)}
          className={`px-4 py-2 rounded font-bold transition-all ${stock === 0 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-slate-700 text-white hover:bg-slate-800'}`}
        >
          QUITAR (-3)
        </button>
      </div>
    </div>
  );
}

export default Controlstock;