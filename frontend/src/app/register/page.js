"use client";
import { useState } from "react";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    const response = await fetch("http://127.0.0.1:8001/api/register/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      alert("Registration successful!");
    } else {
      alert("Registration failed.");
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
      <br />
      <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" />
      <br />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}
