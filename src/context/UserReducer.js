import UserData from "./Data/UserServices";

const USER_GET_ALL = "USER_GET_ALL";
const USER_GET_BY_ID = "USER_GET_BY_ID";
const USER_CREATE = "USER_CREATE";
const USER_UPDATE = "USER_UPDATE";
const USER_DELETE = "USER_DELETE";

const userReducer = (users, action) => {
  const operation = action.type;
  switch (operation) {
    case USER_GET_ALL:
      break;
    case USER_GET_BY_ID:
      break;
    case USER_CREATE:
      break;
    case USER_UPDATE:
      break;
    case USER_DELETE:
      break;
    default:
      return users;
  }
};
