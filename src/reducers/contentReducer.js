let defaultState = [
  {
    screenshot: "https://kinsta.com/wp-content/uploads/2019/08/jpg-vs-jpeg.jpg",
        projectName: "My First project",
    url:"https://www.npmjs.com/package/react-spring",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea earum reiciendis itaque tenetur minus in fugiat! Itaque porro eveniet nobis, iste iure dolores sit, fugit molestiae tenetur optio assumenda fuga.",
  },
  {
    screenshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBi1Qa26iwkMZPDbZOVPPwsfu1rryNmkoE5Q&usqp=CAU",
      projectName: "My Second project",
    url:"https://www.npmjs.com/package/react-move",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea earum reiciendis itaque tenetur minus in fugiat! Itaque porro eveniet nobis, iste iure dolores sit, fugit molestiae tenetur optio assumenda fuga.",
  },
  {
    screenshot: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNo3-wasDsTIbNSKEPaCnY0MmlvRPzvsUKM1v-cCatlg112L9rN6cpX1_n8I3irQ9L3S4&usqp=CAU",
      projectName: "My Third project",
    url:"https://mui.com/components/text-fields/",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea earum reiciendis itaque tenetur minus in fugiat! Itaque porro eveniet nobis, iste iure dolores sit, fugit molestiae tenetur optio assumenda fuga.",
  },
  {
    screenshot: "http://www.or-as.be/sites/default/files/images/general/projectDatabase.jpg",
      projectName: "My Fourth project",
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
