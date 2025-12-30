import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Notes = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const validateUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) navigate("login");

      try {
        const response = await axios.get(
          "https://notesapi-production-1112.up.railway.app/notes",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        if (response.status === 401 || response.status === 403) {
          alert("Unauthorized access");
          navigate("login");
        } else {
          console.log(`Authorized`);
        }
      } catch (error) {
        console.log(error);
      }
    };
    validateUser();
  }, []);

  return <div>Notes</div>;
};

export default Notes;
