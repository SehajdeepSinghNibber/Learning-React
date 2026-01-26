import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errorUsername, setErrorUsername] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

  const [userColor, setUserColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");
  const [confirmPasswordColor, setConfirmPasswordColor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;

    if (username.length < 3) {
      setErrorUsername("Username must be at least 3 characters");
      setUserColor("error");
      isValid = false;
    } else {
      setErrorUsername("");
      setUserColor("success");
    }

    if (!email.includes("@")) {
      setErrorEmail("Invalid email");
      setEmailColor("error");
      isValid = false;
    } else {
      setErrorEmail("");
      setEmailColor("success");
    }

    if (password.length < 6) {
      setErrorPassword("Password must be at least 6 characters");
      setPasswordColor("error");
      isValid = false;
    } else {
      setErrorPassword("");
      setPasswordColor("success");
    }

    if (confirmPassword === "") {
      setErrorConfirmPassword("Please confirm your password");
      setConfirmPasswordColor("error");
      isValid = false;
    } else if (password !== confirmPassword) {
      setErrorConfirmPassword("Passwords do not match");
      setConfirmPasswordColor("error");
      isValid = false;
    } else {
      setErrorConfirmPassword("");
      setConfirmPasswordColor("success");
    }
    
    if (isValid) {
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");

      setUserColor("");
      setEmailColor("");
      setPasswordColor("");
      setConfirmPasswordColor("");

      alert("Registration successful 🎉");
    }
  };


  return (
    <div className="container">
      <div className="image-box">
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
          alt="unsplash"
        />
      </div>

      <form className="form" onSubmit={handleSubmit}>
        <h2>Register</h2>
    
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={userColor}
        />
        <p className="error-text">{errorUsername}</p>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={emailColor}
        />
        <p className="error-text">{errorEmail}</p>

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={passwordColor}
        />
        <p className="error-text">{errorPassword}</p>

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className={confirmPasswordColor}
        />
        <p className="error-text">{errorConfirmPassword}</p>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
