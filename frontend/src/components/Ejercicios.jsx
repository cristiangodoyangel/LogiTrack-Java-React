import { useState } from "react";

function Ejercicios() {
    const [stateBodega, setStateBodega] = useState("PRINCIPAL");

    return (
        <>
            <div>
                <h1>Ejercicios</h1>
                <p>Bodega: {stateBodega}</p>
            </div>
            
            <button onClick={() => setStateBodega("Bodega Norte")} className="bg-slate-700 text-white px-6 py-2 rounded-full hover:bg-sky-600 transition-all border-b-4 border-sky-400">Bodega Norte</button>
            <button onClick={() => setStateBodega("Bodega Sur")} className="bg-slate-700 text-white px-6 py-2 rounded-full hover:bg-sky-600 transition-all border-b-4 border-sky-400"className="bg-slate-700 text-white px-6 py-2 rounded-full hover:bg-sky-600 transition-all border-b-4 border-sky-400">Bodega Sur</button>

        </>
        
    );



}

export default Ejercicios;
