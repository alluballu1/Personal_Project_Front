let defaultState = [
  {
    screenshot: "https://kinsta.com/wp-content/uploads/2019/08/jpg-vs-jpeg.jpg",
        projectName: "My first project",
    url:"https://www.npmjs.com/package/react-spring",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea earum reiciendis itaque tenetur minus in fugiat! Itaque porro eveniet nobis, iste iure dolores sit, fugit molestiae tenetur optio assumenda fuga.",
  },
  {
    screenshot: "https://kinsta.com/wp-content/uploads/2019/08/jpg-vs-jpeg.jpg",
      projectName: "My first project",
    url:"https://www.npmjs.com/package/react-move",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea earum reiciendis itaque tenetur minus in fugiat! Itaque porro eveniet nobis, iste iure dolores sit, fugit molestiae tenetur optio assumenda fugLorem ipsum dolor sit amet consectetur adipisicing elit. Ea earum reiciendis itaque tenetur minus in fugiat! Itaque porro eveniet nobis, iste iure dolores sit, fugit molestiae tenetur optio assumenda fugLorem ipsum dolor sit amet consectetur adipisicing elit. Ea earum reiciendis itaque tenetur minus in fugiat! Itaque porro eveniet nobis, iste iure dolores sit, fugit molestiae tenetur optio assumenda fuga.",
  },
  {
    screenshot: "https://kinsta.com/wp-content/uploads/2019/08/jpg-vs-jpeg.jpg",
      projectName: "My first project",
    url:"https://mui.com/components/text-fields/",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea earum reiciendis itaque tenetur minus in fugiat! Itaque porro eveniet nobis, iste iure dolores sit, fugit molestiae tenetur optio assumenda fuga.",
  },
  {
    screenshot: "https://kinsta.com/wp-content/uploads/2019/08/jpg-vs-jpeg.jpg",
      projectName: "My first project",
    url:"https://reactgo.com/react-open-link-new-tab/",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea earum reiciendis itaque tenetur minus in fugiat! Itaque porro eveniet nobis, iste iure dolores sit, fugit molestiae tenetur optio assumenda fuga.",
  },
];

export const addOne = (value) => {
  return async (dispatch) => {
    console.log(value);
    dispatch({
      data: value,
      type: "ADD_NEW",
    });
  };
};

const projectReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_NEW":
      const test = state.concat(action.data);
      console.log(state);
      return test;
    default:
      return state;
  }
};

export default projectReducer;
