import React, { useState } from "react";
import { useSelector } from "react-redux";
import BlogComponent from "../components/Blogs/BlogComponent";
import BlogPagination from "../components/Blogs/BlogPagination";
import BlogSpeedDial from "../components/Blogs/BlogSpeedDial";

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
  const blogs = useSelector((state) => state.blogs);

  const pageNavFunct = (event, value) => {
    setSliceEnd(9 * value);
    setSliceStart(9 * value - 9);
  };


  return (
    <div style={styles.container}>
      <div style={styles.componentContainer}>
        {blogs.slice(sliceStart, sliceEnd).map((element) => (
          <div style={{ padding: 10 }}>
            <BlogComponent other={blogs} test={element} />
          </div>
        ))}
      </div>
      <div style={{ position: "fixed", bottom: 50, right: 0 }}>
        <BlogSpeedDial />
      </div>
      <div style={styles.paginationContainer}>
        <div style={{ position: "fixed", bottom: 0 }}>
          <BlogPagination
            change={(val) => pageNavFunct(null, val)}
            count={
              Number.isInteger(blogs.length / 9)
                ? blogs.length / 9 - 1
                : Math.floor(blogs.length / 9)
            }
          />
        </div>
      </div>
    </div>
  );
};

export default MainContentScreen;
