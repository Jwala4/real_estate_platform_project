 "use client";
import { useState } from "react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const response = await fetch("http://127.0.0.1:8001/api/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const data = await response.json();
      alert("Login successful!");
      console.log(data.access); // You can store this in localStorage
    } else {
      alert("Login failed. Check your credentials.");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
      <br />
      <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" />
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
   