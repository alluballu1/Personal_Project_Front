import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginHandler } from "../reducers/loginReducer";

const LoginScreen = () => {
    const navigation = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch()
    
  let styles = {
    containerStyle: {
      height: "100vh",
      alignItems: "center",
      display: "flex",
      alignContent: "center",
      justifyContent: "center",
    },
    mainBoxStyle: {
      display: "flex",
      maxHeight: 500,
      minHeight: 400,
      justifyContent: "center",
      alignItems: "center",
      maxWidth: 500,
      minWidth: 300,
      backgroundColor: "#2D2D2D",
      borderRadius: 10,
      marginBottom: 50,
    },
    innerBox: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#333333",
      padding: 10,
    },
  };
  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(loginHandler({username, password}))
    navigation("/")
  };
  return (
    <Container style={styles.containerStyle}>
      <Box style={styles.mainBoxStyle}>
        <Box
          style={styles.innerBox}
          component={"form"}
          onSubmit={submitHandler}
        >
          <Typography
            variant="h6"
            color="ivory"
            style={{ textAlign: "center" }}
          >
            Login
          </Typography>
                  <TextField
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
            margin="normal"
            variant="filled"
            label="Username"
            required
            sx={{ backgroundColor: "ivory", borderRadius: 1 }}
          />
                  <TextField
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
            variant="filled"
            label="Username"
            required
            sx={{ backgroundColor: "ivory", borderRadius: 1 }}
          />
          <div
            style={{
              marginTop: 10,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <Button>Register</Button>
            <Button variant="contained" type="submit">
              Login
            </Button>
          </div>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginScreen;
