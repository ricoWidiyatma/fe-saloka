import { useState } from "react";
import { register } from "../api/auth.api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({
    name: "", email: "", password: "", password_confirmation: ""
  });
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    if (form.password !== form.password_confirmation) {
      return alert("Password tidak sama");
    }
    await register(form);
    alert("Register berhasil");
    navigate("/login");
  };

  return (
    <form onSubmit={submit}>
      <h2>Register</h2>
      <input placeholder="Name" onChange={e=>setForm({...form,name:e.target.value})}/>
      <input placeholder="Email" onChange={e=>setForm({...form,email:e.target.value})}/>
      <input type="password" placeholder="Password"
        onChange={e=>setForm({...form,password:e.target.value})}/>
      <input type="password" placeholder="Confirm Password"
        onChange={e=>setForm({...form,password_confirmation:e.target.value})}/>
      <button>Register</button>
    </form>
  );
}
