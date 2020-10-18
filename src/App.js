import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
import { listTodos } from './graphql/queries';
import './App.css';
import { createTodo } from './graphql/mutations';
import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);

const initialFormState = {
  id: "asas",
  cat_transporte: 0,
  cat_energia: 0,
  cat_alimentacion: 0,
  cat_ahorro: 0,
  total_hogar: 0,
  cat_empleado: 0,
  total_empresa: 0,
  aspectos_positivos: "",
  aspectos_negativos: "",
  createdAt: "",
  updatedAt: ""
}

const finalFormState = {
  id: "asas",
  cat_transporte: 100,
  cat_energia: 100,
  cat_alimentacion: 100,
  cat_ahorro: 100,
  total_hogar: 1000,
  cat_empleado: 100,
  total_empresa: 10000,
  aspectos_positivos: 100,
  aspectos_negativos: 100,
  createdAt: "",
  updatedAt: ""
}



function App() {
  // const [notes, setNotes] = useState(initialFormState);
  const [formData, setFormData] = useState(initialFormState);
  const [recomendacion, setRecomendacion] = useState("");

  useEffect(() => {
    fetchNotes();
  }, []);

  async function fetchNotes() {
    const apiData = await API.graphql({ query: listTodos });
    // setNotes(apiData.data.listTodos.items);
  }

  async function createForm() {
    if (
      !formData.aspectos_negativos ||
      !formData.aspectos_positivos ||
      !formData.cat_ahorro ||
      !formData.cat_alimentacion ||
      !formData.cat_empleado ||
      !formData.cat_energia ||
      !formData.cat_transporte ||
      !formData.total_empresa ||
      !formData.total_hogar
    ) {
      return;
    }
    await API.graphql({ query: createTodo, variables: { input: formData } });
    // setNotes(formData);
    setFormData(initialFormState);
    console.log("Datos Creados");
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>UQUE Mi Calculadora de Huella de Carbono</h1>
        <input
          onChange={e => setFormData({ ...formData, 'cat_transporte': e.target.value })}
          placeholder="Note cat_transporte"
          value={formData.cat_transporte}
        />
        <input
          onChange={e => setFormData({ ...formData, 'cat_energia': e.target.value })}
          placeholder="Note cat_energia"
          value={formData.cat_energia}
        />
        <input
          onChange={e => setFormData({ ...formData, 'cat_alimentacion': e.target.value })}
          placeholder="Note cat_alimentacion"
          value={formData.cat_alimentacion}
        />
        <input
          onChange={e => setFormData({ ...formData, 'cat_ahorro': e.target.value })}
          placeholder="Note cat_ahorro"
          value={formData.cat_ahorro}
        />
        <input
          onChange={e => setFormData({ ...formData, 'total_hogar': e.target.value })}
          placeholder="Note total_hogar"
          value={formData.total_hogar}
        />
        <input
          onChange={e => setFormData({ ...formData, 'cat_empleado': e.target.value })}
          placeholder="Note cat_empleado"
          value={formData.cat_empleado}
        />
        <input
          onChange={e => setFormData({ ...formData, 'total_empresa': e.target.value })}
          placeholder="Note total_empresa"
          value={formData.total_empresa}
        />
        <input
          onChange={e => setFormData({ ...formData, 'aspectos_positivos': e.target.value })}
          placeholder="Note aspectos_positivos"
          value={formData.aspectos_positivos}
        />
        <input
          onChange={e => setFormData({ ...formData, 'aspectos_negativos': e.target.value })}
          placeholder="Note aspectos_negativos"
          value={formData.aspectos_negativos}
        />

        <button onClick={createForm}>Guardar Datos</button>
        {/* 
        <div style={{ marginBottom: 30 }}>
          {/* {
            notes.map(note => (
              <div key={note.id}>
                <h2>{note.cat_ahorro}</h2>
                <p>{note.cat_empleado}</p>
              </div>
            ))
          } }
        </div> */}
      </header>
    </div>
  );
}

export default App;
