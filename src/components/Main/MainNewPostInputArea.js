import { Box, Button, Container, Input, TextField } from "@mui/material";
import { useState } from "react";

const MainNewPostInputArea = (props) => {
  const [nameValue, setNameValue] = useState(null);
  const [urlValue, setUrlValue] = useState(null);
  const [SSUrlValue, setSSurlValue] = useState(null);
  const [descriptionValue, setDescriptionValue] = useState(null);

  const submitHandler = () => {
    if ((!nameValue, !urlValue, !SSUrlValue, !descriptionValue)) {
      console.log("error");
      return;
    }
    const newProject = {
      projectName: nameValue,
      url: urlValue,
      screenshot: SSUrlValue,
      description: descriptionValue,
    };

    props.postContent(newProject);
    props.close();
  };

  let styles = {
    containerStyle: {
      background: "#30302E",
      height: "75%",
      padding: 10,
      display: "flex",
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    inputStyle: {
      padding: 0.75,
      background: "ivory",
      borderRadius: 1,
      marginBottom: 1,
    },
  };
  return (
    <Container style={styles.containerStyle}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
        autoComplete="off"
        component="form"
        onSubmit={submitHandler}
      >
        <TextField
          value={nameValue}
          onChange={(e) => setNameValue(e.target.value)}
          variant="filled"
          label="Project Name"
          margin="dense"
          required
          sx={{ backgroundColor: "white", borderRadius: 1 }}
        />

        <TextField
          value={urlValue}
          onChange={(e) => setUrlValue(e.target.value)}
          margin="dense"
          variant="filled"
          label="Url"
          required
          sx={{ backgroundColor: "white", borderRadius: 1 }}
        />
        <TextField
          value={SSUrlValue}
          onChange={(e) => setSSurlValue(e.target.value)}
          variant="filled"
          margin="dense"
          label="Screenshot URL"
          sx={{ backgroundColor: "white", borderRadius: 1 }}
        />

        <TextField
          value={descriptionValue}
          onChange={(e) => setDescriptionValue(e.target.value)}
          variant="filled"
          margin="dense"
          multiline
          minRows={3}
          maxRows={3}
          label="description"
          sx={{ backgroundColor: "white", borderRadius: 1 }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginTop: 5,
          }}
        >
          <Button variant="outlined" onClick={() => props.close()}>
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained" /* onClick={() => submitHandler()} */
          >
            Submit
          </Button>
        </div>
      </Box>
    </Container>
  );
};

export default MainNewPostInputArea;
