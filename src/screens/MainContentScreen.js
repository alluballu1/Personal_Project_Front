import React, { useState } from "react";
import { useSelector } from "react-redux";
import MainCardComponent from "../components/Main/MainCardComponent";
import MainNewPostModal from "../components/Main/MainNewPostModal";
import MainPagination from "../components/Main/MainPagination";

let styles = {
  container: {
    padding: 20,
    backgroundColor: "#30302E",
    minHeight: "100vh",
    height:"fit-content"
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
};

const MainContentScreen = (props) => {
  const [sliceStart, setSliceStart] = useState(0);
  const [sliceEnd, setSliceEnd] = useState(12);
  const [modalVisibility, setModalVisibility] = useState(false);
  const content = props.content;

  const pageNavFunct = (event, value) => {
    setSliceEnd(12 * value);
    setSliceStart(12 * value - 12);
  };

  return (
    <div style={styles.container}>
      <MainNewPostModal
        open={modalVisibility}
        close={() => setModalVisibility(!modalVisibility)}
      />
      <div style={styles.componentContainer}>
        {content.slice(sliceStart, sliceEnd).map((element) => (
          <div style={{ padding: 10 }}>
            <MainCardComponent other={content} test={element} />
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
