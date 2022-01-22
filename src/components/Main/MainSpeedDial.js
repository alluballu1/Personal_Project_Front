import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import { FiPlus } from "react-icons/fi";

const actions = [{ icon: <FiPlus />, name: "New", value: "NEW" }];

export default function MainSpeedDial(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const test = (action) => {
    switch (action.value) {
      case "NEW":
        props.openModal();
        setOpen(false);
        break
      default:
        setOpen(false);
        return;
    }
  };

  return (
    <Box sx={{ height: 330,  flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            value={action.value}
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={() => test(action)}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
