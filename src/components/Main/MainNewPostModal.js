import { Button, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch } from "react-redux";
import { addOne } from "../../reducers/contentReducer";
import MainNewPostInputArea from "./MainNewPostInputArea";


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

const MainNewPostModal = (props) => {
  const dispatch = useDispatch();

  return (
    <Modal
      open={props.open}
      onClose={() => console.log("closed")}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Text in a modal
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
        <MainNewPostInputArea
          postContent={(value) => dispatch(addOne(value))}
          close={() => props.close()}
        />
      </Box>
    </Modal>
  );
};

export default MainNewPostModal;
