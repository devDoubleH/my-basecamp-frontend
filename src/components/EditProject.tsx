import { useState, useEffect } from "react";
import {
  Link,
  Button,
  TextField,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import { PeopleAltTwoTone } from "@mui/icons-material";
import { Slide, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import api from "../api";

export default function EditProject() {
  const [create, setCreate] = useState(false);
  const [read, setRead] = useState(false);
  const [edit, setEdit] = useState(false);
  const [isDelete, setDelete] = useState(false);
  const [text, setText] = useState("");

  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const id = localStorage.getItem("project");

  const navigate = useNavigate();

  const addMember = () => {
    api
      .post("project/addMember", {
        id: id,
        permissions: {
          create,
          read,
          edit,
          delete: isDelete,
        },
        role: create && read && edit && isDelete ? "admin" : "member",
        email: text,
      })
      .then((res) => {
        if (res.status === 200) {
          setSuccess("Member added successfully");
          setTimeout(() => {
            setSuccess("");
          }, 2000);
        }
      })
      .catch((err) => {
        setError(err.response.data.message);
        setTimeout(() => {
          setError("");
        }, 2000);
      });
  };

  const updateProject = () => {
    api
      .put(`update/project/${id}`, {
        name: projectName,
        description: projectDescription,
      })
      .then((res) => {
        if (res.status === 200) {
          setSuccess("Project updated successfully");
          setTimeout(() => {
            setSuccess("");
          }, 2000);
        }
      })
      .catch((err) => {
        setError(err.response.data.message);
        setTimeout(() => {
          setError("");
        }, 2000);
      });
  };

  return (
    <div className="flex flex-col w-screen h-screen justify-start items-center">
      {error && (
        <Slide
          direction="down"
          in={true}
          mountOnEnter
          unmountOnExit
          className="absolute top-24 left-[70%]"
        >
          <Alert severity="error">{error}</Alert>
        </Slide>
      )}
      {success && (
        <Slide
          direction="down"
          in={true}
          mountOnEnter
          unmountOnExit
          className="absolute top-24 left-[70%]"
        >
          <Alert severity="success">{success}</Alert>
        </Slide>
      )}

      <header className="flex w-screen justify-between items-center gap-5 px-10 border-b border-gray-700">
        <Link href="/dashboard" underline="none">
          <PeopleAltTwoTone sx={{ fontSize: 80, color: "lightblue" }} />
        </Link>
        <nav className="flex justify-around items-center gap-5">
          <Button
            variant="outlined"
            onClick={() => {
              navigate("/newproject");
            }}
          >
            New Project
          </Button>
          <Button variant="outlined">Edit Profile</Button>
          <Button variant="outlined">Logout</Button>
        </nav>
      </header>
      <div className="flex flex-row w-full h-full justify-start items-start p-8">
        <form className="flex flex-col w-full justify-center items-start gap-4">
          <h1 className="text-4xl font-bold">Edit Project</h1>
          <TextField
            id="outlined-basic"
            label="Project Name"
            variant="outlined"
            className="w-1/2"
            value={projectName}
            onChange={(e) => {
              setProjectName(e.target.value);
            }}
          />
          <TextField
            id="outlined-basic"
            label="Project Description"
            variant="outlined"
            className="w-1/2"
            value={projectDescription}
            onChange={(e) => {
              setProjectDescription(e.target.value);
            }}
          />
          <Button
            variant="contained"
            className="w-1/2"
            onClick={() => {
              updateProject();
            }}
          >
            update
          </Button>
        </form>
        <div className="flex flex-col w-full h-full justify-start items-start gap-4">
          <form className="flex flex-col w-full justify-start items-start gap-4">
            <h1 className="text-4xl font-bold">Add Members</h1>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              className="w-1/2"
              inputProps={{ type: "email" }}
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <div className="flex flex-row w-full justify-start items-start gap-4">
              <FormGroup className="flex flex-row">
                <FormControlLabel
                  control={
                    <Checkbox
                      value={create}
                      onChange={() => setCreate(!create)}
                    />
                  }
                  label="Create"
                />
                <FormControlLabel
                  control={
                    <Checkbox value={read} onChange={() => setRead(!read)} />
                  }
                  label="Read"
                />
                <FormControlLabel
                  control={
                    <Checkbox value={edit} onChange={() => setEdit(!edit)} />
                  }
                  label="Edit"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      value={isDelete}
                      onChange={() => setDelete(!isDelete)}
                    />
                  }
                  label="Delete"
                />
              </FormGroup>
            </div>
            <Button variant="contained" className="w-1/2" onClick={addMember}>
              add
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
