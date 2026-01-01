import api from "../services/GetApi";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import NoteCard from "../components/NoteCard.jsx";
import NewCard from "../components/NewCard.jsx";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [card, setCard] = useState(false);
  const navigate = useNavigate();

  const handleUpdateNote = (updatedNote) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note._id === updatedNote._id ? updatedNote : note
      )
    );
  };

  const addNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  async function getNotes(token) {
    const notesResponse = await api.get("/notes", {
      headers: { Authorization: `Bearer ${token}` },
    });

    setNotes(notesResponse.data);
    console.log(notes);
  }

  async function deleteNote(noteId) {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Unauthorized");
      return;
    }
    console.log(noteId);
    try {
      await api.delete(`/notes/${noteId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setNotes((prevNotes) => prevNotes.filter((note) => note._id !== noteId));
    } catch (error) {
      console.error({ error });
    }
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
  }, []);

  return (
    <div className="min-h-screen bg-cyan-100 px-5 py-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-5">
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-800">
          Your Notes
        </h1>

        <button
          className="
            bg-cyan-900 text-white text-3xl w-14 h-14 rounded-full
            hover:bg-cyan-700 hover:shadow-lg hover:scale-105
            transition-all duration-300
            flex items-center justify-center pb-2 text-4xl cursor-pointer
          "
          onClick={() => setCard(true)}
        >
          +
        </button>
      </div>

      {/* NewCard */}
      {card && (
        <div className="flex justify-center mb-10 animate-fade-in">
          <NewCard closeCard={() => setCard(false)} addNote={addNote} />
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  px-5">
        {notes.map((note) => (
          <div
            key={note._id}
            className="transition-transform transform hover:scale-105"
          >
            <NoteCard
              title={note.title}
              description={note.content}
              noteId={note._id}
              onDelete={deleteNote}
              onUpdate={handleUpdateNote}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;
