import { Button } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import MainCardComponent from "../components/Main/MainCardComponent";
import MainEditExistingPostModal from "../components/Main/MainEditExistingPostModal";
import MainNewPostModal from "../components/Main/MainNewPostModal";
import MainPagination from "../components/Main/MainPagination";

let styles = {
  container: {
    padding: 20,
    backgroundColor: "#30302E",
    minHeight: "100vh",
    height: "fit-content",
    display: "flex",
    flexDirection: "column",
  },
  componentContainer: {
    flexWrap: "wrap",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 50,
  },
  paginationContainer: {
    flex: 1,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  headerStyle: {
    padding: 20,
    width: "85%",
    background: "#292929",
    alignSelf: "center",
    alignItems: "center",
    textAlign: "center",
    color: "white",
    marginBottom: 10,
    fontSize: 24,
    borderRadius: 5,
  },
};

const MainContentScreen = (props) => {
  const [sliceStart, setSliceStart] = useState(0);
  const [sliceEnd, setSliceEnd] = useState(12);

  const content = props.content;

  if (!content) {
    return <div>Loading</div>;
  }


  const pageNavFunct = (event, value) => {
    setSliceEnd(12 * value);
    setSliceStart(12 * value - 12);
  };

  return (
    <div style={styles.container}>
      <div style={styles.headerStyle}>ALL PROJECTS</div>
      <div style={styles.componentContainer}>
        {content.slice(sliceStart, sliceEnd).map((element, index) => (
          <div key={index} style={{ padding: 10 }}>
            <MainCardComponent
              myProject={false}
              other={content}
              test={element}
              
            />
          </div>
        ))}
      </div>
      <div style={styles.paginationContainer}>
        <div style={{ position: "fixed", bottom: 0 }}>
          <MainPagination
            change={(val) => pageNavFunct(null, val)}
            count={
              Number.isInteger(content.length / 12)
                ? content.length / 12 - 1
                : Math.floor(content.length / 12)
            }
          />
        </div>
      </div>
    </div>
  );
};

export default MainContentScreen;
