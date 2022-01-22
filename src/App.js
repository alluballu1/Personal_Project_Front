import "./App.css";
import ResponsiveAppBar from "./components/Navigation/AppBar";
import { Container } from "@mui/material";
import MainContentScreen from "./screens/MainContentScreen";

function App() {
  return (
    <div style={{ height: "100vh", backgroundColor: "#2D2D2D" }}>
      <ResponsiveAppBar />
      <div  style={{ backgroundColor: "#2D2D2D", marginTop:60}}>
        <Container>
          <MainContentScreen />
        </Container>
      </div>
    </div>
  );
}

export default App;
