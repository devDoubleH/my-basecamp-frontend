import { useEffect, useState } from "react";
import { PeopleAltTwoTone } from "@mui/icons-material";
import { TextField, Button, Link, Alert, Slide } from "@mui/material";
import { useNavigate } from "react-router-dom";

import api from "../api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [submit, setSubmit] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError("");
      }, 2000);
    }
    if (success) {
      setTimeout(() => {
        setSuccess("");
      }, 2000);
    }
  }, [error, success]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!email) {
      setError("Email is required");
    }
    if (!password) {
      setError("Password is required");
    }

    api
      .post("/login", {
        email,
        password,
      })
      .then((res) => {
        localStorage.setItem("id", res.data._id);
        console.log(res);
        if (res.status === 200) {
          setSubmit(true);
          setSuccess("Login successful");
          navigate("/dashboard");
        }
      })
      .catch((err) => {
        setSubmit(true);
        setError(err.response.data.msg);
      });
  };
  return (
    <div className="flex flex-col justify-center items-center">
      {error ? (
        <Slide direction="down" in={submit} mountOnEnter unmountOnExit>
          <Alert severity="error" className="absolute top-10 left-3/4">
            {error}
          </Alert>
        </Slide>
      ) : null}
      {success ? (
        <Slide direction="down" in={submit} mountOnEnter unmountOnExit>
          <Alert severity="success" className="absolute top-10 left-3/4">
            {success}
          </Alert>
        </Slide>
      ) : null}

      <PeopleAltTwoTone sx={{ fontSize: 300, color: "lightblue" }} />
      <div className="flex flex-col justify-center items-center gap-5">
        <TextField
          label="Email"
          variant="filled"
          sx={{ minWidth: 400 }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          inputProps={{ type: "email" }}
        />
        <TextField
          label="Password"
          variant="filled"
          sx={{ minWidth: 400 }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          inputProps={{
            type: "password",
            inputprops: { min: 6, max: 10 },
          }}
        />
        <Button variant="outlined" onClick={(e: any) => handleSubmit(e)}>
          Login
        </Button>
        <Link href="/login" underline="none" color="#3F51B5">
          Don't have an account? Register
        </Link>
      </div>
    </div>
  );
}

export default Login;
