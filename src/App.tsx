import { Button, Stack, Link } from "@mui/material";
import { PeopleAltTwoTone } from "@mui/icons-material";
function App() {
  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center">
      <PeopleAltTwoTone sx={{ fontSize: 600, color: "lightblue" }} />
      <Stack spacing={10} direction="row">
        <Button variant="contained">
          <Link href="/register" underline="none" color="white">
            Register
          </Link>
        </Button>
        <Button variant="contained">
          <Link href="/login" underline="none" color="white">
            Login
          </Link>
        </Button>
      </Stack>
    </div>
  );
}

export default App;
