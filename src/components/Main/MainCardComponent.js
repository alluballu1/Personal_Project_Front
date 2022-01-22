import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function MainCardComponent(props) {
  return (
    <Card
      style={{ backgroundColor: "#2D2D2D" }}
      sx={{
        ":hover": {boxShadow:10 },
        maxWidth: 350,
        minWidth: 320,
        height: "fit-content",
        maxHeight:300
      }}
    >
      <CardActionArea onClick={() =>  window.open(props.test.url)}>
        <CardMedia
          component="img"
          height="140"
          image={props.test.screenshot}
        />
        <CardContent>
          <Typography gutterBottom color="white" variant="h6" component="div">
            {props.test.projectName}
          </Typography>
          <Typography variant="body2" color="white">
            {props.test.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
