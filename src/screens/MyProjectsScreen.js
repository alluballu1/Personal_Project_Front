import { Button } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import MainCardComponent from "../components/Main/MainCardComponent";
import MainNewPostModal from "../components/Main/MainNewPostModal";
import MainPagination from "../components/Main/MainPagination";
import MainSpeedDial from "../components/Main/MainSpeedDial";
import token from ".././services/content";
import MainEditExistingPostModal from "../components/Main/MainEditExistingPostModal";
import { deleteProject } from "../reducers/contentReducer";
import { useDispatch } from "react-redux";

const MyProjectsScreen = (props) => {
  const [toggle, setToggle] = useState("");
  const [sliceStart, setSliceStart] = useState(0);
  const [sliceEnd, setSliceEnd] = useState(12);
  const [modalVisibility, setModalVisibility] = useState(false);
  const [editModalVisibility, setEditModalVisibility] = useState(false);
  const [editProjectData, setEditProjectData] = useState(null);
  const content = props.content;
  const dispatch = useDispatch();
  const data = JSON.parse(window.localStorage.getItem("LoggedUserData"));
  if (!content) {
    return <div>Loading</div>;
  }

  const pageNavFunct = (event, value) => {
    setSliceEnd(12 * value);
    setSliceStart(12 * value - 12);
  };

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

  const buttonStateHandler = (value) => {
    if (value === toggle) {
      setToggle(null);
      return;
    }
    setToggle(value);
  };

  const editModalFunction = (values) => {
    setEditProjectData(values);
    setEditModalVisibility(true);
  };

  const deletionHandler = (values) => {
    if (window.confirm("Do you want to delete this project?")) {
      dispatch(deleteProject(values));
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.headerStyle}>MY PROJECTS</div>
      <MainNewPostModal
        open={modalVisibility}
        close={() => setModalVisibility(!modalVisibility)}
      />
      <MainEditExistingPostModal
        close={() => setEditModalVisibility(!editModalVisibility)}
        data={editProjectData}
        open={editModalVisibility}
      />
      <div style={styles.componentContainer}>
        {content
          .filter((element) => element.user.id === data.user.id)
          .slice(sliceStart, sliceEnd)
          .map((element, index) => (
            <div key={index} style={{ padding: 10 }}>
              <MainCardComponent
                deletion={(value) => deletionHandler(value)}
                editFunction={(value) => editModalFunction(value)}
                myProject={true}
                toggle={toggle}
                other={content}
                test={element}
              />
            </div>
          ))}
      </div>
      <div style={{ position: "fixed", bottom: 50, right: 0 }}>
        <MainSpeedDial
          buttonPress={(value) => buttonStateHandler(value)}
          openModal={() => setModalVisibility(true)}
        />
      </div>
      <div style={styles.paginationContainer}>
        <div style={{ position: "fixed", bottom: 0 }}>
          <MainPagination
            change={(val) => pageNavFunct(null, val)}
            count={
              Number.isInteger(
                content.filter((element) => element.user.id === data.user.id)
                  .length / 12
              )
                ? content.filter((element) => element.user.id === data.user.id)
                    .length /
                    12 -
                  1
                : Math.floor(
                    content.filter(
                      (element) => element.user.id === data.user.id
                    ).length / 12
                  )
            }
          />
        </div>
      </div>
    </div>
  );
};

export default MyProjectsScreen;
