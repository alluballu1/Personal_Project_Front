import { Button, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch } from "react-redux";
import { editPostData} from "../../reducers/contentReducer";
import MainEditPostInputArea from "./MainEditPostInputArea";

const style = {
  position: "absolute",
  top: "50%",
  color: "white",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 300,
  maxWidth: 400,
  bgcolor: "#2D2D2D",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  height: 500,
  borderRadius: 5,
};

const MainEditExistingPostModal = (props) => {
  const dispatch = useDispatch();

  return (
    <Modal
      open={props.open}
      onClose={() => console.log("closed")}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Button onClick={() => console.log(props.data)}>TEST</Button>
        <Typography
          sx={{ textAlign: "center" }}
          id="modal-modal-title"
          variant="h6"
          component="h2"
        >
          Edit an existing project
        </Typography>
        <Button>Test</Button>
        <MainEditPostInputArea
          props={props.data}
          postContent={(value) => dispatch(editPostData(value))}
          close={() => props.close()}
        />
      </Box>
    </Modal>
  );
};

export default MainEditExistingPostModal;
