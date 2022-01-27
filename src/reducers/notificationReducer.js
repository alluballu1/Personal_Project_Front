let defaultState = null; /* {type:"success", text:"pog", status:true}; */
let notificationID;

export const enableNotification = (time, notification) => {
  return async (dispatch) => {
    if (notificationID) {
      clearTimeout(notificationID);
    }
    dispatch({
      type: "NEW_NOTIFICATION",
      data: notification,
    });
    notificationID = setTimeout(() => {
      dispatch({
        type: "END_NOTIFICATION",
        data: null,
      });
    }, 1000 * time);
  };
};

const notificationReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "NEW_NOTIFICATION":
      return action.data;
    case "END_NOTIFICATION":
      return action.data;
    default:
      return state;
  }
};

export default notificationReducer;

//Might try to get this work again at some point...
