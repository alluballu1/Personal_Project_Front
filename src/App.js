import "./App.css";
import ResponsiveAppBar from "./components/Navigation/AppBar";
import { Container } from "@mui/material";
import MainContentScreen from "./screens/MainContentScreen";
import img from "./media/wallpapertip_blue-pattern-wallpaper_1172740.jpg";

import { Routes, Route, Link } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <div
        className="container"
        style={{ height: "fit-content", backgroundImage: `url(${img})` }}
      >
        <div style={{ marginTop: 60 }}>
          <Container style={{ width: "85%" }}>
            <Routes>
              <Route path="/" element={<MainContentScreen />} />
            </Routes>
            <Routes>
              <Route path="/my" element={<LoginScreen/>} />
            </Routes>
          </Container>
        </div>
      </div>
    </>
  );
}

export default App;
