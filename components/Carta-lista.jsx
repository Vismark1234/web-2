import React from "react";
import Carta from "./Carta-ubi";
import "./Carta-lista.css";

export default function ListaCartas() {
    const restaurantes = [
        {
            nombre: "Restaurante Miraflores",
            direccion: "Avenida Busch #1234, La Paz, Bolivia",
            telefono: "(+591) 2 222-3344",
            email: "miraflores@restaurante.bo",
        },
        {
            nombre: "Restaurante Sopocachi",
            direccion: "Calle Belisario Salinas #567, La Paz, Bolivia",
            telefono: "(+591) 2 333-4455",
            email: "sopocachi@restaurante.bo",
        },
        {
            nombre: "Restaurante Calacoto",
            direccion: "Avenida Ballivián #890, Zona Sur, La Paz, Bolivia",
            telefono: "(+591) 2 444-5566",
            email: "calacoto@restaurante.bo",
        },
    ];

    return (
        <div className="lista-cartas">
            {restaurantes.map((restaurante, index) => (
                <Carta 
                    key={index}
                    nombre={restaurante.nombre}
                    direccion={restaurante.direccion}
                    telefono={restaurante.telefono}
                    email={restaurante.email}
                />
            ))}
        </div>
    );
}
