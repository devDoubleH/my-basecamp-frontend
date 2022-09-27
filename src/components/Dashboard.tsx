import { useState, useEffect } from "react";
import { PeopleAltTwoTone } from "@mui/icons-material";
import { Button, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Dashboard() {
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
          <Button variant="outlined">New Project</Button>
          <Button variant="outlined">Edit Profile</Button>
          <Button variant="outlined">Logout</Button>
        </nav>
      </header>
    </div>
  );
}

export default Dashboard;
