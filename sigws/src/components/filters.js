import React, { useState } from "react";
import '../styles/filters.css';
const FiltroComponent = ({ onFilterChange }) => {
    const [tipo, setTipo] = useState("");
    const [distancia, setDistancia] = useState(50); 
    const [potencia, setPotencia] = useState(22);
    const [cabezal, setCabezal] = useState("");

    const handleApplyFilters = () => {
        onFilterChange({
            tipo,
            distancia,
            potencia,
            cabezal,
        });
    };

    return (
        <div className="filtro-container">
            <h3>Filtros</h3>
            <div>
                <label htmlFor="tipo">Tipo:</label>
                <select
                    id="tipo"
                    value={tipo}
                    onChange={(e) => {
                        setTipo(e.target.value);
                    }}
                >
                    <option value="">Todos</option>
                    <option value="Socket Only">Solo enchufe</option>
                    <option value="Tethered Connector">Conector fijo</option>
                </select>
            </div>

            <div>
                <label htmlFor="distancia">Distancia (km): {distancia} km</label>
                <input
                    type="range"
                    id="distancia"
                    min="0"
                    max="200"
                    value={distancia}
                    onChange={(e) => {
                        setDistancia(e.target.value);
                    }}
                />
            </div>

            <div>
                <label htmlFor="voltaje">Potencia (kw): {potencia} kw</label>
                <input
                    type="range"
                    id="potencia"
                    min="22"
                    max="220"
                    value={potencia}
                    onChange={(e) => {
                        setPotencia(e.target.value);
                    }}
                />
            </div>

            <div>
                <label>Cabezal:</label>
                <select
                    id="cabezal"
                    value={cabezal}
                    onChange={(e) => {
                        setCabezal(e.target.value);
                    }}
                >
                    <option value="">Todos</option>
                    <option value="Tipo 2">Tipo 2</option>
                    <option value="CCS">CCS</option>
                    <option value="CHAdeMO">CHAdeMO</option>
                    <option value="Tipo F">Tipo F</option>
                </select>
            </div>
            <div>
                <button onClick={handleApplyFilters}>Aplicar Filtros</button>
            </div>
        </div>


    );
};

export default FiltroComponent;
