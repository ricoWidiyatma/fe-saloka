import { useState } from "react";
import { login } from "../api/auth.api";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password });

      // Ambil token dari res.data.token
      const token = res.token; // karena auth.api.js return res.data

      if (!token) {
        console.error("Response login:", res);
        alert("Login gagal: token tidak ditemukan");
        return;
      }

      // Simpan token
      localStorage.setItem("token", token);

      // Redirect ke categories
      navigate("/categories");
    } catch (err) {
      console.error(err.response?.data);
      alert(err.response?.data?.message || "Login gagal");
    }
  };

  return (
    <form onSubmit={submit}>
      <h2>Login</h2>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button>Login</button>
      <p>
        <Link to="/register">Register</Link>
      </p>
    </form>
  );
}
