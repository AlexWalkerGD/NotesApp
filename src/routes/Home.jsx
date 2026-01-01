import api from "../services/GetApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const Home = () => {
  const inputEmail = useRef();
  const inputPassword = useRef();
  const navigate = useNavigate();

  async function createUser(e) {
    e.preventDefault();
    try {
      await api.post("/auth/register", {
        email: inputEmail.current.value,
        password: inputPassword.current.value,
      });
      toast.success("Registration created successfully!");
      inputEmail.current.value = "";
      inputPassword.current.value = "";
    } catch (error) {
      console.error({ error });
      toast.error("Error registering!");
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cyan-100">
      <div className="flex items-center flex-col">
        <form
          onSubmit={createUser}
          className="
            flex flex-col gap-6 p-8 rounded-2xl bg-cyan-900
            shadow-2xl border-2 border-cyan-800 max-w-md w-full
            transition-transform transform hover:scale-105
          "
        >
          <h1 className="text-white text-3xl font-bold text-center mb-4">
            Register
          </h1>

          {/* Input Email */}
          <input
            className="
              border-2 border-cyan-700 rounded-lg h-10 bg-cyan-700
              text-white text-md pl-3 outline-none
              focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300
              transition-all duration-300
            "
            type="email"
            placeholder="Email"
            required
            ref={inputEmail}
          />

          {/* Input Password */}
          <input
            className="
              border-2 border-cyan-700 rounded-lg h-10 bg-cyan-700
              text-white text-md pl-3 outline-none
              focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300
              transition-all duration-300
            "
            type="password"
            placeholder="Password"
            required
            minLength={8}
            ref={inputPassword}
            autoComplete="current-password"
          />

          {/* Button */}
          <button
            className="
              rounded-lg bg-gray-200 h-10 font-bold cursor-pointer
              hover:bg-gray-400 active:scale-95 transition-all duration-200
              text-cyan-900 text-lg
            "
            type="submit"
          >
            Register
          </button>
        </form>

        {/* Link to login */}
        <h1
          onClick={() => navigate("/login")}
          className="
            text-center pt-5 font-bold text-lg text-cyan-900
            cursor-pointer hover:text-cyan-700 transition-colors duration-300
          "
        >
          Already have an account? Login
        </h1>
      </div>
    </div>
  );
};

export default Home;
