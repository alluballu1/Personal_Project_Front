import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const navigation = useNavigate();
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
    navigation("/");
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
            LOGIN
          </Typography>
          <TextField
            margin="normal"
            variant="filled"
            label="Username"
            required
            sx={{ backgroundColor: "ivory", borderRadius: 1 }}
          />
          <TextField
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
