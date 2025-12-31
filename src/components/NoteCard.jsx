import React from "react";

const Card = ({ title, description, noteId, onDelete }) => {
  return (
    <div className="relative group bg-cyan-900 w-50 h-50 pt-5 px-3 pb-2 rounded-xl overflow-hidden">
      <h1 className="text-white font-bold text-xl text-center">{title}</h1>
      <p className="text-gray-300 pt-2">{description}</p>

      <div
        className="
      absolute inset-0 bg-black/20 flex items-start pt-3 justify-center
      translate-y-[100%] group-hover:translate-y-35 transition-all duration-500
    "
      >
        <button
          onClick={() => onDelete(noteId)}
          className="px-4 py-1 bg-gray-300 hover:bg-gray-400 rounded-lg font-medium text-cyan-900 cursor-pointer"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default Card;
