import "./App.css";
import ResponsiveAppBar from "./components/Navigation/AppBar";
import { Container } from "@mui/material";
import MainContentScreen from "./screens/MainContentScreen";
import img from "./media/wallpapertip_blue-pattern-wallpaper_1172740.jpg";
import { Routes, Route, Link } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import MyProjectsScreen from "./screens/MyProjectsScreen";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function App() {
  const content = useSelector((state) => state.content);
  //const login = useSelector(state => state.login)
  const [login, setlogin] = useState(null);
  useEffect(() => {
    const token = window.localStorage.getItem("LoggedUserData");
    if (token) {
      setlogin(token);
    }
  }, []);

  const routes = [
    {
      path: "/",
      element: <MainContentScreen content={content} />,
    },
    {
      path: "/login",
      element: <LoginScreen />,
    },
    {
      path: "/my_projects",
      element: <MyProjectsScreen content={content} />,
    },
  ];

  return (
    <>
      <div
        className="container"
        style={{ height: "fit-content", backgroundImage: `url(${img})` }}
      >
        <div style={{ marginTop: 60 }}>
          <Container style={{ width: "85%" }}>
            {routes.map((element) => {
              return (
                <Routes>
                  <Route
                    path={element.path}
                    element={
                      <div>
                        <ResponsiveAppBar login={login} /> {element.element}
                      </div>
                    }
                  />
                </Routes>
              );
            })}
          </Container>
        </div>
      </div>
    </>
  );
}

export default App;
