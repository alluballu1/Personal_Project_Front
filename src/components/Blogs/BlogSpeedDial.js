import * as React from "react";
import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import { BsSave, BsShareFill, BsPrinterFill } from "react-icons/bs";
import { FiCopy } from "react-icons/fi";

const actions = [
  { icon: <FiCopy />, name: "Copy", value:"test" },
  { icon: <BsSave />, name: "Save" },
  { icon: <BsPrinterFill />, name: "Print" },
  { icon: <BsShareFill />, name: "Share" },
];

export default function BlogSpeedDial() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const test = (action) => {
    console.log(action);
    setOpen(false);
  };

  return (
    <Box sx={{ height: 330, transform: "translateZ(0px)", flexGrow: 1 }}>
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
