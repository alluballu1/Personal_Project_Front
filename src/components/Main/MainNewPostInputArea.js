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
      background: "white",
      borderRadius: 1,
      marginBottom: 1,
      opacity: 0.5,
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
        <Input
          value={nameValue}
          onChange={(value) => setNameValue(value.target.value)}
          placeholder="Project Name"
          size="medium"
          required
          error={nameValue === ""}
          sx={styles.inputStyle}
        />
        <Input
          value={urlValue}
          onChange={(value) => setUrlValue(value.target.value)}
          placeholder="Project Url"
          required
          size="medium"
          error={urlValue === ""}
          sx={styles.inputStyle}
        />
        <Input
          value={SSUrlValue}
          onChange={(value) => setSSurlValue(value.target.value)}
          placeholder="Project Screenshot Url"
          size="medium"
          error={urlValue === ""}
          sx={styles.inputStyle}
        />
        <Input
          value={descriptionValue}
          onChange={(value) => setDescriptionValue(value.target.value)}
          placeholder="Project Description"
          required
          multiline
          minRows={3}
          maxRows={3}
          size="medium"
          error={descriptionValue === ""}
          sx={{ ...styles.inputStyle }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <Button
            sx={{ background: "red", ":hover": { background: "darkred" } }}
            variant="contained"
            onClick={() => props.close()}
          >
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
