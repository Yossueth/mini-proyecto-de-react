import React, { useState } from "react";
import { putTask } from "../services/tareas";
import "../styles/modal.css";

export const Editar = ({ editarModal }) => {
  const [tarea, setTarea] = useState("");
  const [prioridad, setPrioridad] = useState(editarModal.prioridad || "");
  const [modalVisible, setModalVisible] = useState(false);
  const [error, setError] = useState("");

  const abrirModal = () => setModalVisible(true);
  const cerrarModal = () => setModalVisible(false);

  const editar = async () => {
    if (!editarModal.id) {
      setError("ID no válido");
      return;
    }

    if (!tarea.trim() || !prioridad) {
      setError("Todos los campos son obligatorios");
      return;
    }

    try {
      editarModal.task = tarea;
      editarModal.prioridad = prioridad;

      await putTask(editarModal, editarModal.id);

      window.location.reload();

      cerrarModal();
    } catch (error) {
      setError("Error al actualizar la tarea",error);
    }
  };

  return (
    <div>
      <button id="btnAbrirModal" onClick={abrirModal}>
        Editar
      </button>

      {modalVisible && (
        <dialog id="modal" open>
          <p id="cerrarModal" onClick={cerrarModal}>
            𝐗
          </p>
          <input
            type="text"
            id="editeditarModal"
            placeholder={editarModal.task}
            value={tarea}
            onChange={(e) => setTarea(e.target.value)}
          />
          <select
            id="inputSelect"
            value={prioridad}
            onChange={(e) => setPrioridad(e.target.value)}
          >
            <option value="">Seleccione prioridad</option>
            <option value="high">high</option>
            <option value="medium">Medium</option>
            <option value="low">low</option>
          </select>
          <button id="btnConfirmarEdit" onClick={editar}>
            Editar
          </button>
          {error && <p className="error">{error}</p>}
        </dialog>
      )}
    </div>
  );
};
