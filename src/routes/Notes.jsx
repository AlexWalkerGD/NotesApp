import React from "react";
import axios from "axios";
import api from "../services/GetApi";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import NoteCard from "../components/NoteCard.jsx";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();

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

        const notesResponse = await api.get("/notes", {
          headers: { Authorization: `Bearer ${token}` },
        });

        console.log("Notes:", notesResponse.data);
        setNotes(notesResponse.data);
      } catch (error) {
        console.log(error);
      }
    };
    validateUser();
  }, []);

  return (
    <div>
      <h1 className="text-3xl text-center font-semibold pt-5 text-cyan-800">
        Your Notes
      </h1>
      <div className="flex flex-col gap-5 items-center pt-10">
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
