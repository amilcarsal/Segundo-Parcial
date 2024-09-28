import React from 'react';
import ReactDOM from 'react-dom/client'; // Importa desde 'react-dom/client' para React 18
import './index.css'; // Asegúrate de importar tus estilos (si tienes)
import App from './App'; // Importa el componente principal App

// Renderiza la aplicación en el elemento con id 'root'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



