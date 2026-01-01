import api from "../services/GetApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const Login = () => {
  const inputEmail = useRef();
  const inputPassword = useRef();
  const navigate = useNavigate();

  async function loginUser(e) {
    e.preventDefault();
    try {
      const response = await api.post("/auth/login", {
        email: inputEmail.current.value,
        password: inputPassword.current.value,
      });
      localStorage.setItem("token", response.data.token);
      toast.success("Login successful!");
      navigate("/notes");
    } catch (error) {
      console.error({ error });
      toast.error("Error logging in!");
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center pt-25 bg-cyan-100">
      <div className="flex items-center flex-col">
        <form
          onSubmit={loginUser}
          className="
            flex flex-col gap-6 p-8 rounded-2xl bg-cyan-900
            shadow-2xl border-2 border-cyan-800 max-w-md w-full
            transition-transform transform hover:scale-105
          "
        >
          <h1 className="text-white text-3xl font-bold text-center mb-4">
            Login
          </h1>

          {/* Input Email */}
          <input
            type="email"
            placeholder="Email"
            required
            ref={inputEmail}
            className="
              border-2 border-cyan-700 rounded-lg h-10 bg-cyan-700
              text-white text-md pl-3 outline-none
              focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300
              transition-all duration-300
            "
          />

          {/* Input Password */}
          <input
            type="password"
            placeholder="Password"
            required
            minLength={8}
            ref={inputPassword}
            autoComplete="current-password"
            className="
              border-2 border-cyan-700 rounded-lg h-10 bg-cyan-700
              text-white text-md pl-3 outline-none
              focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300
              transition-all duration-300
            "
          />

          {/* Button */}
          <button
            type="submit"
            className="
              rounded-lg bg-gray-200 h-10 font-bold cursor-pointer
              hover:bg-gray-400 active:scale-95 transition-all duration-200
              text-cyan-900 text-lg
            "
          >
            Login
          </button>
        </form>

        {/* Link to register */}
        <h1
          onClick={() => navigate("/")}
          className="
            text-center pt-5 font-bold text-lg text-cyan-900
            cursor-pointer hover:text-cyan-700 transition-colors duration-300
          "
        >
          Don’t have an account? Register
        </h1>
      </div>
    </div>
  );
};

export default Login;
