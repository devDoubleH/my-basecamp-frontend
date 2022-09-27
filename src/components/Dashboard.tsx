import React, { useEffect, useState } from "react";
import { PeopleAltTwoTone } from "@mui/icons-material";
import { Button, Link, Tab, Box } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [value, setValue] = useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <header className="flex w-screen justify-between items-center gap-5 px-10">
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
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="All Projects" value="1" />
            <Tab label="Created by me" value="2" />
            <Tab label="Shared with me" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">Item One</TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </div>
  );
}

export default Dashboard;
