import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authenticateUser } from "../utils/auth";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  //Local Arrangement
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = authenticateUser(form.username, form.password);
    if (user) {
      login(user);
      navigate("/");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gray-100 dark:bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl w-96"
      >
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-800 dark:text-white">Login to FocusFlow</h2>

        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 mb-4 border rounded-lg dark:bg-gray-700 dark:text-white"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 border rounded-lg dark:bg-gray-700 dark:text-white"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold"
        >
          Login
        </button>
      </form>
    </div>
  );
}

  