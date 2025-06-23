import React, { useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", password: "", occupation: "", location: ""
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/auth/register", form);
    navigate("/login");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="First Name" onChange={e => setForm({...form, firstName: e.target.value})} />
      <input placeholder="Last Name" onChange={e => setForm({...form, lastName: e.target.value})} />
      <input placeholder="Email" onChange={e => setForm({...form, email: e.target.value})} />
      <input type="password" placeholder="Password" onChange={e => setForm({...form, password: e.target.value})} />
      <input placeholder="Occupation" onChange={e => setForm({...form, occupation: e.target.value})} />
      <input placeholder="Location" onChange={e => setForm({...form, location: e.target.value})} />
      <button type="submit">Register</button>
    </form>
  );
}
