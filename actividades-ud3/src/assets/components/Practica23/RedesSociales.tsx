// src/components/Practica23/RedesSociales.tsx
import React from 'react';
import { FaFacebook, FaInstagram, FaGoogle, FaQuestionCircle, FaUniversity } from 'react-icons/fa';
import './RedesSociales.css';

// Definición de la interfaz de props
interface RedesSocialesProps {
  redes: string[];
}

export const RedesSociales = ({ redes }: RedesSocialesProps) => {
  // Colores oficiales
  const colores: Record<string, string> = {
    facebook: '#1877F3',
    instagram: '#E4405F',
    google: '#EA4335',
    default: '#888',
  };

  const obtenerIcono = (nombreRed: string): React.ReactNode => {
    switch (nombreRed.toLowerCase()) {
      case 'facebook':
        return <FaFacebook color={colores.facebook} size={30} />;
      case 'instagram':
        return <FaInstagram color={colores.instagram} size={30} />;
      case 'google':
        return <FaGoogle color={colores.google} size={30} />;
      default:
        return <FaQuestionCircle color={colores.default} size={30} />;
    }
  };

  return (
    <div className="redes-container">
      <div className="redes-list">
        {redes.map((red, index) => (
          <div key={index} className="red-item">
            <div className="red-icon">{obtenerIcono(red)}</div>
            <p className="red-label">{red}</p>
          </div>
        ))}
      </div>

      <div className="ies-item">
        <FaUniversity className="ies-icon" size={28} />
        <p className="ies-label">IES CURA VALERA</p>
      </div>
    </div>
  );
};