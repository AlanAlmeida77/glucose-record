'use client'
import { useState } from 'react';
import { GlucoseRecord } from '../types/types';

const GlucoseForm: React.FC = () => {
  const [record, setRecord] = useState<GlucoseRecord>({
    fecha: '',
    preDesayuno: 0,
    preAlmuerzo: 0,
    preMerienda: 0,
    preCena: 0,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRecord({ ...record, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica para guardar el registro (puedes implementar esto)
    console.log('Registro guardado:', record);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Fecha:
        <input type="text" name="fecha" value={record.fecha} onChange={handleInputChange} />
      </label>
      <label>
        Pre-Desayuno:
        <input
          type="number"
          name="preDesayuno"
          value={record.preDesayuno}
          onChange={handleInputChange}
        />
      </label>
      {/* Repite el patrón para las otras categorías */}
      <button type="submit">Guardar</button>
    </form>
  );
};

export default GlucoseForm;
