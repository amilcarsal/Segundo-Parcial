import { useState, useEffect } from 'react';

function App() {
  const [cursos, setCursos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCursos = async () => {
      try {
        const response = await fetch("https://test-deploy-12.onrender.com/cursos");
        if (!response.ok) {
          throw new Error("Error al obtener los datos");
        }
        const data = await response.json();
        setCursos(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCursos();
  }, []);

  if (loading) return <p>Cargando cursos...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Lista de Cursos</h1>
      <div>
        {cursos.length > 0 ? (
          cursos.map((curso) => (
            <div key={curso.id}>
              <h2>{curso.nombre}</h2>
              <p><strong>Créditos:</strong> {curso.creditos}</p>
              <p><strong>Descripción:</strong> {curso.descripcion}</p>
            </div>
          ))
        ) : (
          <p>No hay cursos disponibles.</p>
        )}
      </div>
    </div>
  );
}

export default App;



