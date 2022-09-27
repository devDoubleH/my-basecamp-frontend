import React, { useEffect, useState } from "react";
import { PeopleAltTwoTone } from "@mui/icons-material";
import { Button, Link, Tab, Tabs, Typography, Box } from "@mui/material";
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

  interface TabPanelProps {
    children?: React.ReactNode;

    value: string;
  }

  function TabPanel(props: TabPanelProps) {
    const { children, value, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== "1"}
        id={`simple-tabpanel-${value}`}
        aria-labelledby={`simple-tab-${value}`}
        {...other}
      >
        {value === "1" && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

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
      <Box>
        <Tabs
          value={0}
          aria-label="basic tabs example"
          sx={{ width: "100%", maxWidth: 500 }}
          onChange={handleChange}
        >
          <Tab label="All Projects" />
          <Tab label="Created by me" />
          <Tab label="Shared with me" />
        </Tabs>
      </Box>

      <TabPanel value="1">Item one</TabPanel>
      <TabPanel value="2">Item two</TabPanel>
      <TabPanel value="3">Item three</TabPanel>
    </div>
  );
}

export default Dashboard;
