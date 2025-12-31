import React from "react";
import api from "../services/GetApi";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import NoteCard from "../components/NoteCard.jsx";
import NewCard from "../components/NewCard.jsx";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [card, setCard] = useState(false);

  const navigate = useNavigate();

  async function getNotes(token) {
    const notesResponse = await api.get("/notes", {
      headers: { Authorization: `Bearer ${token}` },
    });

    setNotes(notesResponse.data);
  }

  useEffect(() => {
    const validateUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) navigate("login");

      try {
        const response = await api.get("/notes", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.status === 401 || response.status === 403) {
          alert("Unauthorized access");
          navigate("login");
        }

        console.log(`Authorized`);

        getNotes(token);
      } catch (error) {
        console.log(error);
      }
    };
    validateUser();
  }, [notes]);

  return (
    <div>
      <div className="flex flex-row justify-between pt-10 ">
        <span className="px-10"></span>
        <h1 className="text-3xl text-center flex items-center font-semibold text-cyan-800">
          Your Notes
        </h1>
        <button
          className="bg-cyan-900 w-10 h-10 m-2 text-3xl text-white text-center pb-2 cursor-pointer hover:bg-cyan-700"
          onClick={() => setCard(true)}
        >
          +
        </button>
      </div>

      {card && (
        <div className="flex flex-col gap-5 items-center pt-10">
          <NewCard closeCard={() => setCard(false)} />
        </div>
      )}
      <div className="grid grid-cols-2 gap-5 items-center pt-10 px-7">
        {notes.map((note) => (
          <div>
            <NoteCard title={note.title} description={note.content} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;
