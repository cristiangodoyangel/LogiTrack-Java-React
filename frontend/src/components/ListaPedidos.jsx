import { useEffect, useState } from "react";

function ListaPedidos() {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/pedidos")
      .then((response) => response.json())
      .then((data) => setPedidos(data))
      .catch((error) => console.error("Error al cargar pedidos:", error));
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden border-t-4 border-sky-600">
      <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
        <h2 className="text-xl font-bold text-sky-600 flex items-center gap-2">
          <span className="text-sky-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3l8 4.5v9l-8 4.5l-8 -4.5v-9l8 -4.5" /><path d="M12 12l8 -4.5" /><path d="M12 12l0 9" /><path d="M12 12l-8 -4.5" /><path d="M16 5.25l-8 4.5" /></svg>
          </span> 
          Registros de Logística
        </h2>
        <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
          {pedidos.length} Pedidos Totales
        </span>
      </div>

    <div className="p-8">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="bg-slate-700 text-white">
              <th className="py-3 px-6 text-left text-xs font-bold uppercase tracking-wider">ID</th>
              <th className="py-3 px-6 text-left text-xs font-bold uppercase tracking-wider">Código</th>
              <th className="py-3 px-6 text-left text-xs font-bold uppercase tracking-wider">Destino</th>
              <th className="py-3 px-6 text-center text-xs font-bold uppercase tracking-wider">Estado</th>
              <th className="py-3 px-6 text-right text-xs font-bold uppercase tracking-wider">Total</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {pedidos.map((pedido) => (
              <tr key={pedido.id} className="hover:bg-sky-50 transition-colors group">
                <td className="py-4 px-6 text-sm text-slate-500 font-medium">#{pedido.id}</td>
                <td className="py-4 px-6 text-sm font-bold text-slate-700">{pedido.codigo}</td>
                <td className="py-4 px-6 text-sm text-slate-600">{pedido.direccionEntrega}</td>
                <td className="py-4 px-6 text-center">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-yellow-100 text-yellow-700 border border-yellow-200">
                    {pedido.estado}
                  </span>
                </td>
                <td className="py-4 px-6 text-right text-sm font-bold text-slate-900">
                  ${pedido.total.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
      
      {pedidos.length === 0 && (
        <div className="p-8 text-center text-slate-400 italic">
          No hay registros disponibles en el sistema.
        </div>
      )}
    </div>
  );
}

export default ListaPedidos;