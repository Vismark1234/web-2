import React from "react";
import "./GaleriaF.css";

export default function GaleriaF({imagenes}) {
  return (
    <div className="galeria">
      {imagenes.map((imagen, index) => (
        <img key={index} src={imagen} alt={`Imagen ${index + 1}`} />
      ))}
    </div>
  );
};


