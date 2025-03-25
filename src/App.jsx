import { Container } from "@mui/material";
import Navbar from "./components/Navbar";
import Taskboard from "./pages/taskboard/Taskboard";

function App() {
  return (
    <Container maxWidth={false} sx={{ maxWidth: "1000px", margin: "0 auto" }}>
      <Navbar />
      <Taskboard />
    </Container>
  );
}

export default App;
