import React from "react";

const Card = ({ title, description }) => {
  return (
    <div className="bg-cyan-900 w-50 h-50 pt-5 px-3 pb-2 rounded-xl">
      <h1 className="text-white font-bold text-xl text-center">{title}</h1>
      <p className="text-gray-300 pt-2">{description}</p>
    </div>
  );
};

export default Card;
