import { PeopleAltTwoTone } from "@mui/icons-material";
import { Button, Link } from "@mui/material";

function Dashboard() {
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
