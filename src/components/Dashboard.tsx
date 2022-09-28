import React, { useEffect, useState } from "react";
import { PeopleAltTwoTone } from "@mui/icons-material";
import {
  Button,
  Link,
  Tab,
  Box,
  Typography,
  Tabs,
  Skeleton,
  CircularProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import api from "../api";

interface MyRender {
  children: React.ReactNode[];
  loading: boolean;
}

const MyRenderFunction = (props: MyRender) => {
  const navigate = useNavigate();
  const { children, loading } = props;
  return (
    <div className="flex flex-row flex-wrap justify-center items-start w-full h-full overflow-y-scroll">
      {children?.map((project: any, i: number) => {
        if (loading) {
          return (
            <div className="flex flex-col mx-4" key={i}>
              <Skeleton width={300} height={100} />
              <Skeleton width={300} height={70} />
              <Skeleton width={300} height={50} />
            </div>
          );
        } else {
          return (
            <div
              className="flex flex-col mx-4 w-[300px] my-2"
              key={i}
              onClick={() => {
                localStorage.setItem("project", project._id);
                navigate("/editproject");
              }}
            >
              {/* header */}
              <div className="flex flex-col w-full h-[70px] rounded-t-md bg-slate-500 p-2">
                <Typography variant="h5" className="text-white">
                  {project.name}
                </Typography>
                <Typography variant="subtitle1" className="text-white">
                  {project.owner}
                </Typography>
              </div>
              {/* body */}
              <div className="flex flex-col w-full h-[70px] bg-slate-400 p-2">
                <Typography variant="subtitle1" className="text-white">
                  {project.description}
                </Typography>
              </div>
              {/* footer */}
              <div className="flex flex-row w-full h-[50px] rounded-b-md bg-slate-500 p-2">
                <div className="flex flex-col justify-center items-start w-1/2">
                  <Typography variant="subtitle1" className="text-white">
                    {project.members.length}{" "}
                    {project.members.length > 1 ? "members" : "member"}
                  </Typography>
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

function Dashboard() {
  const [value, setValue] = useState(0);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const navigate = useNavigate();

  useEffect(() => {
    const id = localStorage.getItem("id");
    if (!id) {
      navigate("/login");
    }
  }, []);

  const getAllProjects = async () => {
    setLoading(true);
    await api.get("/project/all").then((res) => {
      setProjects(res.data);
      setLoading(false);
    });
  };

  const getCreatedByMeProjects = async () => {
    setLoading(true);
    await api
      .post("/project/created", {
        id: localStorage.getItem("id"),
      })
      .then((res) => {
        setProjects(res.data);
        setLoading(false);
      });
  };

  const getSharedWithMeProjects = async () => {
    setLoading(true);
    await api
      .post("/project/shared", {
        id: localStorage.getItem("id"),
      })
      .then((res) => {
        setProjects(res.data);
        setLoading(false);
      });
  };

  useEffect(() => {
    getAllProjects();

    if (value === 1) {
      getCreatedByMeProjects();
    }

    if (value === 2) {
      getSharedWithMeProjects();
    }
  }, [value]);

  return (
    <div className="flex w-screen h-screen flex-col justify-center items-center">
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
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          display: "flex",
          height: "calc(100vh - 100px)",
          width: "calc(100vw - 200px)",
          justifyContent: "start",
        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: "divider" }}
        >
          <Tab label="All Projects" />
          <Tab label="Created by me" />
          <Tab label="Shared with me" />
        </Tabs>
        {projects.length > 0 ? (
          <MyRenderFunction children={projects} loading={loading} />
        ) : (
          <div className="flex w-full h-full justify-center items-center">
            <CircularProgress />
          </div>
        )}
      </Box>
    </div>
  );
}

export default Dashboard;
