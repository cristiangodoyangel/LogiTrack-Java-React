import { useState } from "react"; // Importar useState
import ListaPedidos from "./components/ListaPedidos";
import FormularioPedido from "./components/FormularioPedido";

function App() {
  // Estado para forzar la recarga de la lista
  const [recargar, setRecargar] = useState(false);

  const refrescarLista = () => {
    setRecargar(!recargar); // Cambia el estado para disparar el efecto
    // (Nota: Necesitaremos un pequeño ajuste en ListaPedidos para que escuche esto, pero primero veamos si pinta el formulario)
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-8">
       
        </h1>
        
        {/* Agregamos el Formulario */}
        <FormularioPedido alCrear={refrescarLista} />
        
        {/* Pasamos una "key" para forzar re-render si hiciera falta, 
            aunque lo ideal es pasar el estado como prop. 
            Por ahora, solo pintemos el formulario. */}
        <ListaPedidos key={recargar} />
      </div>
    </div>
  );
}

export default App;