// src/components/Practica18/Cabeceras.tsx
import './Cabeceras.css';

const obtenerFechaActual = () => {
  return "30/11/2025";
};

export const CabeceraAzul = () => {
  return (
    <header className="cabecera cabecera-azul">
      <h1>Cabecera Azul</h1>
      <p>Fecha: {obtenerFechaActual()}</p>
    </header>
  );
};

export const CabeceraRoja = ({ titulo }: { titulo: string }) => {
  return (
    <header className="cabecera cabecera-roja">
      <h1>{titulo}</h1>
      <small>Fecha: {obtenerFechaActual()}</small>
    </header>
  );
};