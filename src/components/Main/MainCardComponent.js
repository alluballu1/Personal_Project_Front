import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function MainCardComponent(props) {
  const urlChecker = (url) => {
    if (url.includes("http")) {
      window.open(url)
    }
    else {
      window.open(`https://${url}`)
    }
  }
  return (
    <Card
      style={{ backgroundColor: "#2D2D2D" }}
      sx={{
        ":hover": {boxShadow:10 },
        maxWidth: 250,
        minWidth: 200,
        height: "fit-content",
        maxHeight:260
      }}
    >
      <CardActionArea onClick={() =>  urlChecker(props.test.projectUrl) }>
        <CardMedia
          component="img"
          sx={{minWidth:200}}
          height="140"
          image={props.test.projectScreenshotUrl ? props.test.projectScreenshotUrl : "https://wallpaperbat.com/img/641230-react-js-wallpaper-top-free-react-js-background.jpg"}
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
