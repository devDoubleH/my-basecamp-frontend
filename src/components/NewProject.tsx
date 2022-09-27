import React, { useState, useEffect } from "react";
import {
  FormControl,
  InputLabel,
  Input,
  Button,
  TextField,
  Box,
  FormHelperText,
  TextareaAutosize,
} from "@mui/material";

function NewProject() {
  const [title, setTitle] = useState("");
  const [descripion, setDescription] = useState("");

  return (
    <Box className="flex w-screen h-screen flex-col justify-start items-center">
      <h1 className="text-4xl color-black text-center my-4">New Project</h1>
      <FormControl>
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
          placeholder="Minimum 3 rows"
          style={{ width: 200 }}
          value={descripion}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          className="border-1"
        />
      </FormControl>
    </Box>
  );
}

export default NewProject;
