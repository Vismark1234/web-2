import React from "react";
import "./Carta-ubi.css";

export default function Carta({ nombre, direccion, telefono, email }) {
    return (
        <div className="carta">
            <h2 className="carta-nombre">{nombre}</h2>
            <p className="carta-direccion">{direccion}</p>
            <p className="carta-telefono">{telefono}</p>
            <p className="carta-email">{email}</p>
        </div>
    );
}