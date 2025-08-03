import React from 'react';

function Tarefa({ tarefa, onAlternar, onRemover }) {
  return (
    <div
      style={{
        marginTop: '10px',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        background: tarefa.concluida ? '#d4f5d4' : '#f9f9f9',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <span
        onClick={() => onAlternar(tarefa.id)}
        style={{
          textDecoration: tarefa.concluida ? 'line-through' : 'none',
          cursor: 'pointer',
          flex: 1,
        }}
      >
        {tarefa.texto}
      </span>
      <button
        onClick={() => onRemover(tarefa.id)}
        style={{
          marginLeft: '10px',
          background: 'red',
          color: 'white',
          border: 'none',
          padding: '5px 10px',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        ✖
      </button>
    </div>
  );
}

export default Tarefa;
