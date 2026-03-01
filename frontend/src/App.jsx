import { Container } from "@mui/material";
import { TaskManager } from "./Components/TaskManager";
import { Nav } from "./Components/AppBar";

const App = () => {
  return (
    <>
      <Nav />
      <Container maxWidth="lg">
        <TaskManager />
      </Container>
    </>
  );
};

export default App;
