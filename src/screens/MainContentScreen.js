import React, { useState } from "react";
import { useSelector } from "react-redux";
import MainCardComponent from "../components/Main/MainCardComponent";
import MainNewPostModal from "../components/Main/MainNewPostModal";
import MainPagination from "../components/Main/MainPagination";
import MainSpeedDial from "../components/Main/MainSpeedDial";

let styles = {
  container: {
    padding: 20,
    backgroundColor: "#30302E",
    height: "100%",
  },
  componentContainer: {
    flexWrap: "wrap",
    display: "flex",
    flexDirection: "row",
    justifyContent: "normal",
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

const MainContentScreen = () => {
  const [sliceStart, setSliceStart] = useState(0);
  const [sliceEnd, setSliceEnd] = useState(9);
  const [modalVisibility, setModalVisibility] = useState(false);
  const content = useSelector((state) => state.content);

  const pageNavFunct = (event, value) => {
    setSliceEnd(9 * value);
    setSliceStart(9 * value - 9);
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
      <div style={{ position: "fixed", bottom: 50, right: 0 }}>
        <MainSpeedDial openModal={() => setModalVisibility(true)} />
      </div>
      <div style={styles.paginationContainer}>
        <div style={{ position: "fixed", bottom: 0 }}>
          <MainPagination
            change={(val) => pageNavFunct(null, val)}
            count={
              Number.isInteger(content.length / 9)
                ? content.length / 9 - 1
                : Math.floor(content.length / 9)
            }
          />
        </div>
      </div>
    </div>
  );
};

export default MainContentScreen;
