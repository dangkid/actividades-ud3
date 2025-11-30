// src/components/Practica22/ListadoHeroes.tsx
// Importamos los datos y estilos necesarios.
import heroesData from './heroes.json'; 
import './ListadoHeroes.css';

// Sub-componente que renderiza un <td> o <li> según la prop 'esTabla'.
const ItemDato = ({ dato, esTabla }: { dato: string, esTabla: boolean }) => {
  if (esTabla) { 
    return <td>{dato}</td>;
  } else {
    return <li>{dato}</li>;
  }
};

// --- Componente Principal ---
// Muestra una lista o tabla de héroes según el 'publisher' recibido.
export const ListadoHeroes = ({ publisher }: { publisher: string }) => {
  
  // Filtra los héroes que coinciden con el publisher.
  const heroesFiltrados = heroesData.filter(heroe => heroe.publisher === publisher);
  
  // Determina si el formato a usar es una tabla.
  const esFormatoTabla = publisher === 'DC Comics';

  // Si no hay héroes, muestra un mensaje.
  if (heroesFiltrados.length === 0) {
    return <div className="alerta">No hay héroes para {publisher}</div>;
  }

  // Renderiza la lista o la tabla de héroes.
  return (
    <div className="contenedor-heroes">
      <h3>Listado de: {publisher}</h3>

      {/* Renderizado condicional: tabla para DC, lista para el resto. */}
      {esFormatoTabla ? (
        <table className="tabla-heroes">
          <thead>
            <tr>
              <th>Superhéroe</th>
              <th>Alter Ego</th>
              <th>Primera Aparición</th>
            </tr>
          </thead>
          <tbody>
            {heroesFiltrados.map((heroe, index) => (
              <tr key={index}>
                <ItemDato dato={heroe.superhero} esTabla={true} />
                <ItemDato dato={heroe.alter_ego} esTabla={true} />
                <ItemDato dato={heroe.first_appearance} esTabla={true} />
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <ul className="lista-heroes">
          {heroesFiltrados.map((heroe, index) => (
            <div key={index} className="grupo-lista">
              <strong>Heroe:</strong> <ItemDato dato={heroe.superhero} esTabla={false} />
              <span>Identidad:</span> <ItemDato dato={heroe.alter_ego} esTabla={false} />
              <hr/>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};