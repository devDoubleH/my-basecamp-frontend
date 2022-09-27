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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {};
  return <div>Login</div>;
}

export default Login;
