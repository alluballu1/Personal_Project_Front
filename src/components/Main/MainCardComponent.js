import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { FiDelete, FiEdit } from "react-icons/fi";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

export default function MainCardComponent(props) {
  const styles = {
    buttonStyle: {
      position: "absolute",
      backgroundColor: "white",
      borderRadius: 5,
      zIndex: 10,
      cursor: "pointer",
    },
    cardSx: {
      ":hover": { boxShadow: 10 },
      maxWidth: 250,
      minWidth: 200,
      height: 260,
    },
    containerStyle: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      width: "fit-content",
    }
  };
  const urlChecker = (url) => {
    if (url.includes("http")) {
      window.open(url);
    } else {
      window.open(`https://${url}`);
    }
  };
  if (!props.myProject) {
    return (
      <Card
        style={{ backgroundColor: "#2D2D2D" }}
        sx={{...styles.cardSx}}
      >
        <CardActionArea onClick={() => urlChecker(props.test.projectUrl)}>
          <CardMedia
            component="img"
            sx={{ minWidth: 200 }}
            height="140"
            image={
              props.test.projectScreenshotUrl
                ? props.test.projectScreenshotUrl
                : "https://wallpaperbat.com/img/641230-react-js-wallpaper-top-free-react-js-background.jpg"
            }
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
  return (
    <Card
      style={{ backgroundColor: "#2D2D2D" }}
      sx={{...styles.cardSx}}
    >
      <div style={{...styles.containerStyle}} >
        {props.toggle === "EDIT" && (
          <div
            onClick={() => props.editFunction(props.test)}
            style={{ ...styles.buttonStyle, color: "darkGreen" }}
          >
            <AiFillEdit size={34} />
          </div>
        )}
        {props.toggle === "DELETE" && (
          <div
            onClick={() => props.deletion(props.test)}
            style={{
              ...styles.buttonStyle,
              color: "darkRed",
            }}
          >
            <AiFillDelete size={34} />
          </div>
        )}
      </div>

      <CardActionArea onClick={() => urlChecker(props.test.projectUrl)}>
        <CardMedia
          component="img"
          sx={{ minWidth: 200 }}
          height="140"
          image={
            props.test.projectScreenshotUrl
              ? props.test.projectScreenshotUrl
              : "https://wallpaperbat.com/img/641230-react-js-wallpaper-top-free-react-js-background.jpg"
          }
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
