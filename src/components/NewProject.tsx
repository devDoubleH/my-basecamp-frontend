import { useState, useEffect } from "react";
import {
  FormControl,
  Button,
  TextField,
  Box,
  FormHelperText,
  TextareaAutosize,
  Alert,
  Slide,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import api from "../api";

function NewProject() {
  const [title, setTitle] = useState("");
  const [descripion, setDescription] = useState("");

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (title === "") {
      setError("Title is required.");
      return;
    }

    const data = {
      name: title,
      description: descripion,
      id: localStorage.getItem("id"),
    };

    api
      .post("/project", data)
      .then((res) => {
        navigate("/dashboard");
      })
      .catch((err) => {
        setError(err.response.data.msg);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      setError("");
    }, 1500);
  }, [error]);

  return (
    <Box className="flex w-screen h-screen flex-col justify-start items-center">
      {error && (
        <Slide
          direction="down"
          in={true}
          mountOnEnter
          unmountOnExit
          className="absolute left-[70%] top-5"
        >
          <Alert severity="error">{error}</Alert>
        </Slide>
      )}
      <h1 className="text-4xl color-black text-center my-4">New Project 🐣</h1>
      <FormControl className="w-1/3">
        <TextField
          id="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          inputProps={{
            type: "text",
          }}
          label="Title"
        />
        <FormHelperText id="title-helper">
          Don't be afraid to innovate 💡
        </FormHelperText>
        <TextareaAutosize
          aria-label="minimum height"
          minRows={3}
          placeholder="Description"
          style={{ width: "100%" }}
          value={descripion}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          className="border border-gray-400 rounded-sm mt-4 p-2"
        />
        <FormHelperText id="title-helper">
          Write awesome descriptions 👨‍🎨
        </FormHelperText>
        <Box className="flex w-full justify-center items-center mt-4">
          <Button
            variant="contained"
            className="w-1/3"
            onClick={() => {
              handleSubmit();
            }}
          >
            Create 🚀
          </Button>
        </Box>
      </FormControl>
    </Box>
  );
}

export default NewProject;
