import { useEffect, useState } from "react";
import { PeopleAltTwoTone } from "@mui/icons-material";
import { TextField, Button, Link, Alert } from "@mui/material";
import api from "../api";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
    }
    if (password.length !== password2.length) {
      setError("Passwords do not match");
    }
    if (password !== password2) {
      setError("Passwords do not match");
    }
    if (!name) {
      setError("Name is required");
    }
    if (!email) {
      setError("Email is required");
    }

    api
      .post("/register", {
        name,
        email,
        password,
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          setSuccess("Registration successful");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center">
      {error && <Alert severity="error">{error}</Alert>}
      {success && <Alert severity="success">{success}</Alert>}
      <PeopleAltTwoTone sx={{ fontSize: 300, color: "lightblue" }} />
      <div className="flex flex-col justify-center items-center gap-5">
        <TextField
          label="Name"
          variant="filled"
          sx={{ width: 500 }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Email"
          variant="filled"
          sx={{ width: 500 }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          inputProps={{ type: "email" }}
        />
        <TextField
          label="Password"
          variant="filled"
          sx={{ width: 500 }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          inputProps={{
            type: "password",
            inputProps: { min: 6, max: 10 },
          }}
        />
        <TextField
          label="Confirm Password"
          variant="filled"
          sx={{ width: 500 }}
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
          inputProps={{
            type: "password",
            inputProps: { min: 6, max: 10 },
          }}
        />
        <Button variant="contained">Register</Button>
        <Link href="/login" underline="none" color="#3F51B5">
          Already have an account? Login
        </Link>
      </div>
    </div>
  );
}

export default Register;
