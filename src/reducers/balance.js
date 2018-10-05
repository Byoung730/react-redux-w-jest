import * as constants from "../actions/constants";
import { read_cookie, bake_cookie } from "sfcookies";

const BALANCE_COOKIE = "BALANCE_COOKIE";

const balance = (state = 0, action) => {
  let balance;

  switch (action.type) {
    case constants.SET_BALANCE:
      balance = action.balance;
      break;
    case constants.DEPOSIT:
      if (!isNaN(action.deposit)) {
        balance = state + action.deposit;
      } else {
        alert("Please enter a number");
        balance = state;
      }
      break;
    case constants.WITHDRAW:
      if (!isNaN(action.withdrawal)) {
        balance = state - action.withdrawal;
      } else {
        alert("Please enter a number");
        balance = state;
      }
      break;
    default:
      balance = parseInt(read_cookie(BALANCE_COOKIE), 10) || state;
  }

  bake_cookie(BALANCE_COOKIE, balance);

  return balance;
};

export default balance;
