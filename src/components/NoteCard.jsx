import React from "react";
import api from "../services/GetApi";
import { MdEdit } from "react-icons/md";
import { useState, useRef } from "react";

const Card = ({ title, description, noteId, onDelete, onUpdate }) => {
  const currentTitle = title;
  const currentDescription = description;

  const inputTitle = useRef();
  const inputContent = useRef();

  const [editCard, setEditCard] = useState(false);

  async function updateNote(noteId) {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Unauthorized");
      return;
    }
    try {
      const response = await api.patch(
        `/notes/${noteId}`,
        {
          title: inputTitle.current.value,
          content: inputContent.current.value,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      onUpdate(response.data);
      setEditCard(false);
    } catch (error) {
      console.error({ error });
    }
  }

  return (
    <div className="relative group bg-cyan-900 w-50 h-50 pt-5 px-3 pb-2 rounded-xl overflow-hidden">
      {!editCard && (
        <div>
          <h1 className="text-white font-bold text-xl text-center">
            {currentTitle}
          </h1>
          <p className="text-gray-300 pt-2">{currentDescription}</p>
        </div>
      )}

      {editCard && (
        <div>
          <input
            className="text-white font-bold text-xl text-center w-45 outline-none "
            type="text"
            placeholder="Title"
            required
            defaultValue={title}
            ref={inputTitle}
          />
          <input
            className="text-gray-300 pt-2 w-45 outline-none pb-20"
            type="text"
            placeholder="Content..."
            required
            defaultValue={description}
            ref={inputContent}
          />
          <div className=" flex justify-center ">
            <button
              className=" rounded-md bg-gray-300 h-7 w-12 border-none font-bold cursor-pointer hover:bg-gray-400"
              type="button"
              onClick={() => updateNote(noteId)}
            >
              Ok
            </button>
          </div>
        </div>
      )}

      {!editCard && (
        <div>
          <div
            className="
      absolute inset-0 bg-black/20 flex items-start pt-3 justify-center
      translate-y-[100%] group-hover:translate-y-35 transition-all duration-500
    "
          >
            <button
              onClick={() => onDelete(noteId)}
              className="px-4 py-1 cursor-pointer bg-gray-300 hover:bg-gray-400 rounded-lg font-medium text-cyan-900 cursor-pointer"
            >
              Remove
            </button>
          </div>
          <div className="rounded-sm flex justify-start items-end">
            <button
              className="
    absolute top-2 right-2 p-2 rounded bg-black/40 hover:bg-black/60
    opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer
  "
              onClick={() => setEditCard(true)}
            >
              <MdEdit className="text-white" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
