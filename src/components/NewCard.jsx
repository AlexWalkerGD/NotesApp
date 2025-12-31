import React from "react";
import api from "../services/GetApi";
import { useRef } from "react";

const NewCard = ({ closeCard, addNote }) => {
  const inputTitle = useRef();
  const inputContent = useRef();

  async function createNote() {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Unauthorized");
      return;
    }
    try {
      const response = await api.post(
        "/notes",
        {
          title: inputTitle.current.value,
          content: inputContent.current.value,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      addNote(response.data);
      closeCard();
    } catch (error) {
      console.error({ error });
    }
  }

  return (
    <div className=" flex flex-col bg-cyan-900 w-50 h-50 pt-5 px-3 pb-2 rounded-xl ">
      <input
        className="text-white font-bold text-xl text-center w-45 outline-none "
        type="text"
        placeholder="Title"
        ref={inputTitle}
      />
      <input
        className="text-gray-300 pt-2 w-45 outline-none pb-20"
        type="text"
        placeholder="Content..."
        ref={inputContent}
      />
      <div className=" flex justify-center ">
        <button
          className=" rounded-md bg-gray-300 h-7 w-12 border-none font-bold cursor-pointer hover:bg-gray-400"
          type="button"
          onClick={createNote}
        >
          Ok
        </button>
      </div>
    </div>
  );
};

export default NewCard;
