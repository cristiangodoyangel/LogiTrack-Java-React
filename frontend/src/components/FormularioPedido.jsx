import { useState } from "react";

function FormularioPedido({ alCrear }) {
  const [form, setForm] = useState({
    codigo: "",
    direccionEntrega: "",
    total: "",
    clienteId: 50,
    vendedorId: 10,
    comuna: "Santiago",
    telefono: "+5690000000",
    observacion: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    fetch("http://localhost:8080/api/pedidos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    })
    .then(response => {
        if(response.ok) return response.json();
        throw new Error("Error al crear pedido");
    })
    .then(data => {
        alert("¡Pedido Creado! ID: " + data.id);
        alCrear();
        setForm({ ...form, codigo: "", direccionEntrega: "", total: "" });
    })
    .catch(error => console.error("Error:", error));
  };

  return (
  <div className="bg-white rounded-lg shadow-xl overflow-hidden border-t-4 border-sky-600 mb-8">
  <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
    <h3 className="text-xl font-bold text-sky-600 flex items-center gap-2">
      <span className="text-sky-600">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-new-section">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M9 12l6 0" />
          <path d="M12 9l0 6" />
          <path d="M4 6v-1a1 1 0 0 1 1 -1h1m5 0h2m5 0h1a1 1 0 0 1 1 1v1m0 5v2m0 5v1a1 1 0 0 1 -1 1h-1m-5 0h-2m-5 0h-1a1 1 0 0 1 -1 -1v-1m0 -5v-2m0 -5" />
        </svg>
      </span> 
      Nuevo Pedido
    </h3>
  </div>
  <div className="p-8">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        <input 
          type="text" name="codigo" placeholder="Código de Pedido" 
          className="border border-slate-200 p-2 rounded focus:outline-none focus:ring-2 focus:ring-sky-600"
          value={form.codigo} onChange={handleChange} required 
        />
        
        <input 
          type="text" name="direccionEntrega" placeholder="Dirección Destino" 
          className="border border-slate-200 p-2 rounded focus:outline-none focus:ring-2 focus:ring-sky-600"
          value={form.direccionEntrega} onChange={handleChange} required 
        />

        <input 
          type="number" name="total" placeholder="Total $" 
          className="border border-slate-200 p-2 rounded focus:outline-none focus:ring-2 focus:ring-sky-600"
          value={form.total} onChange={handleChange} required 
        />

        <button 
          type="submit" 
          className="bg-slate-700 text-white font-bold py-2 px-4 rounded hover:bg-slate-600 hover:text-white transition-all shadow-md md:col-span-3 border-b-2 border-sky-500">
          CREAR REGISTRO
        </button>

      </form>
    </div>  
    </div>
  );
}

export default FormularioPedido;