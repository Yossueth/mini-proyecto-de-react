import { postTask } from "../services/tareas";
import { useState } from "react";
import MostrarTareas from "./MostrarTareas";
import CerrarSession from "./CerrarSession";
import "../styles/Home.css"

const FormHome = () => {
  const [task, setTask] = useState("");
  const [prioridad, setPrioridad] = useState("");

  async function meterdatos() {
    try {
      const objectTask = {
        task: task,
        prioridad: prioridad,
      };
      await postTask(objectTask);

      setTask("");
      setPrioridad("");
    } catch (error) {
      console.error("Error al agregar tarea:", error);
    }
  }

  return (
    <div>
      <CerrarSession />
      <form onSubmit={meterdatos} id="formHome">
        <input
          type="text"
          placeholder="Agrega una tarea"
          id="inputTask"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <select
          id="inputSelect"
          value={prioridad}
          onChange={(e) => setPrioridad(e.target.value)}
        >
          <option value="">Select</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        <input type="submit" value="Agregar" id="btnEnviar" />
      </form>
      <MostrarTareas />
    </div>
  );
};

export default FormHome;
