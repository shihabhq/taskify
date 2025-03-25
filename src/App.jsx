import { Container } from "@mui/material";
import Navbar from "./components/Navbar";
import Taskboard from "./pages/taskboard/Taskboard";

function App() {
  return (
    <Container>
      <Navbar />
      <Taskboard />
    </Container>
  );
}

export default App;
