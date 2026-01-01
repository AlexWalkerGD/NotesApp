import React from "react";
import api from "../services/GetApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const Login = () => {
  const inputEmail = useRef();
  const inputPassword = useRef();
  const navigate = useNavigate();

  async function loginUser() {
    try {
      const response = await api.post("/auth/login", {
        email: inputEmail.current.value,
        password: inputPassword.current.value,
      });
      localStorage.setItem("token", response.data.token);
      navigate("/notes");
    } catch (error) {
      console.error({ error });
      toast.error("Erro ao fazer login!");
    }
  }

  return (
    <div className="">
      <div className="flex items-center flex-col pt-4">
        <form className="flex flex-col gap-6 p-5 rounded-xs bg-cyan-900 max-w-md w-sm  border-2">
          <h1 className="text-white text-2xl text-center">Login</h1>
          <input
            className="border-gray-600 rounded-xs h-8 bg-cyan-700 text-white text-md pl-2 outline-none"
            type="text"
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
            onClick={loginUser}
          >
            Login
          </button>
        </form>
      </div>
      <h1
        onClick={() => navigate("/")}
        className="text-center pt-3 font-bold text-l text-cyan-900 cursor-pointer"
      >
        Register
      </h1>
    </div>
  );
};

export default Login;
