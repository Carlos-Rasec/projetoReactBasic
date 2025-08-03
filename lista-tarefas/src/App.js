import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Tarefa from './components/Tarefa';

function App(){
  const [tarefas, setTarefas] = useState([]);

  // Carregar tarefas do localStorage ao iniciar
  useEffect(() => {
    const tarefasSalvas = JSON.parse(localStorage.getItem('tarefas'));
    if (tarefasSalvas) {
      setTarefas(tarefasSalvas);
    }
  }, []);

    // Salvar no localStorage sempre que tarefas mudarem
  useEffect(() => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }, [tarefas]);
  
 const adicionarTarefa = (texto) => {
    const novaTarefa = {
      id: Date.now(),
      texto,
      concluida: false,
    };
    setTarefas([...tarefas, novaTarefa]);
  };

  const alternarConclusao = (id) => {
    setTarefas(
      tarefas.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
      )
    );
  };

  const removerTarefa = (id) => {
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>📝 Lista de Tarefas</h1>
      <Formulario onAdicionar={adicionarTarefa} />
      {tarefas.map((tarefa) => (
        <Tarefa
          key={tarefa.id}
          tarefa={tarefa}
          onAlternar={alternarConclusao}
          onRemover={removerTarefa}
        />
      ))}
    </div>
  );
}

export default App;


