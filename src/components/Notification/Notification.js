import { Alert, Snackbar } from "@mui/material";
import { useSelector } from "react-redux";
const notifications = state => state.notification
const Notification = () => {
  const notification = useSelector(notifications);
  if (notification) {
    return (
      <Snackbar open={notification}>
        <Alert
          variant="filled"
          severity={notification.type}
          sx={{ width: "100%" }}
        >
          {notification.text}
        </Alert>
      </Snackbar>
    );
    }
    return null
};

export default Notification;
