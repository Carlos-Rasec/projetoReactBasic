import React, { useState } from 'react';

function Formulario({ onAdicionar }) {
  const [texto, setTexto] = useState('');

  const enviar = (e) => {
    e.preventDefault();
    if (texto.trim()) {
      onAdicionar(texto);
      setTexto('');
    }
  };

  return (
    <form onSubmit={enviar}>
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Digite uma tarefa"
        style={{ padding: '8px', width: '70%' }}
      />
      <button type="submit" style={{ padding: '8px 12px', marginLeft: '10px' }}>
        Adicionar
      </button>
    </form>
  );
}

export default Formulario;
