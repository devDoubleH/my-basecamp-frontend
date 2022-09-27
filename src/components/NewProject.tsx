import React, { useState, useEffect } from "react";
import {
  FormControl,
  InputLabel,
  Input,
  Button,
  TextField,
  Box,
  FormHelperText,
} from "@mui/material";

function NewProject() {
  const [title, setTitle] = useState("");
  const [descripion, setDescription] = useState("");

  return (
    <Box className="flex w-screen h-screen flex-col justify-center items-center">
      <h1>New Project</h1>
      <FormControl>
        <InputLabel htmlFor="title">Title</InputLabel>
        <TextField
          id="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          inputProps={{
            type: "text",
          }}
          placeholder="Awesome Project"
        />
        <FormHelperText id="title-helper">
          Don't be afraid to innovate
        </FormHelperText>
      </FormControl>
    </Box>
  );
}

export default NewProject;
