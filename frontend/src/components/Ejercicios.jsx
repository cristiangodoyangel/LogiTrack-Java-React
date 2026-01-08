import { useState } from "react";

function Ejercicios() {
    const [stateBodega, setStateBodega] = useState("PRINCIPAL");

    return (
        <div className="bg-white rounded-lg shadow-xl overflow-hidden border-t-4 border-sky-600 mb-8">
            <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    <span className="text-sky-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 12l6 0" /><path d="M12 9l0 6" /><path d="M4 6v-1a1 1 0 0 1 1 -1h1m5 0h2m5 0h1a1 1 0 0 1 1 1v1m0 5v2m0 5v1a1 1 0 0 1 -1 1h-1m-5 0h-2m-5 0h-1a1 1 0 0 1 -1 -1v-1m0 -5v-2m0 -5" />
                        </svg>
                    </span> 
                    Gestión de Bodegas
                </h3>
            </div>

            <div className="p-8 text-center">
                {/* Cambio de color dinámico en el texto */}
                <p className={`text-3xl font-black mb-6 transition-colors duration-500 ${
                    stateBodega === "Bodega Norte" ? "text-sky-500" : 
                    stateBodega === "Bodega Sur" ? "text-slate-800" : "text-slate-400"
                }`}>
                    {stateBodega}
                </p>

                <div className="flex justify-center gap-4">
                    <button 
                        onClick={() => setStateBodega("Bodega Norte")} 
                        className="bg-sky-500 text-white px-6 py-2 rounded-lg font-bold hover:bg-sky-600 transition-all shadow-lg shadow-sky-100"
                    >
                        BODEGA NORTE
                    </button>

                    <button 
                        onClick={() => setStateBodega("Bodega Sur")} 
                        className="bg-slate-800 text-white px-6 py-2 rounded-lg font-bold hover:bg-slate-900 transition-all shadow-lg shadow-slate-200"
                    >
                        BODEGA SUR
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Ejercicios;