import React from "react";
import api from "../services/GetApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const Home = () => {
  const inputEmail = useRef();
  const inputPassword = useRef();
  const navigate = useNavigate();

  async function createUser() {
    try {
      await api.post("/auth/register", {
        email: inputEmail.current.value,
        password: inputPassword.current.value,
      });
      toast.success("Registo criado com sucesso!");
    } catch (error) {
      console.error({ error });
      toast.error("Erro ao criar registo!");
    }
  }

  return (
    <div className="">
      <div className="flex items-center flex-col pt-4">
        <form className="flex flex-col gap-6 p-5 rounded-xs bg-cyan-900 max-w-md w-sm  border-2">
          <h1 className="text-white text-2xl text-center">Register</h1>
          <input
            className="border-gray-600 rounded-xs h-8 bg-cyan-700 text-white text-md pl-2 outline-none"
            type="email"
            placeholder="email"
            required
            ref={inputEmail}
          />
          <input
            className="border-gray-600 rounded-xs h-8 bg-cyan-700 text-white text-md pl-2 outline-none"
            type="password"
            placeholder="password"
            required
            minLength={8}
            ref={inputPassword}
            autoComplete="current-password"
          />
          <button
            className="rounded-md bg-gray-400 h-7 border-none font-bold cursor-pointer hover:bg-gray-500"
            type="submit"
            onClick={createUser}
          >
            Register
          </button>
        </form>
      </div>
      <h1
        onClick={() => navigate("/login")}
        className="text-center pt-3 font-bold text-l text-cyan-900 cursor-pointer"
      >
        Login
      </h1>
    </div>
  );
};

export default Home;
