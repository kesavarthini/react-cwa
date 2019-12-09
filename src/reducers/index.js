import { FETCH_RECORDS, ADD_RECORDS } from "../constants/action-types";
const initialState = {
  users: [
    {
      id: 1,
      name: "Keshu"
    },
    {
      id: 2,
      name: "Neha"
    },
    {
      id: 3,
      name: "Saravanan"
    },
    {
      leftTitle: "User Name",
      rightTitle: "User Id"
    }
  ],
  stocks: [
    {
      name: "TCS",
      id: 1
    },
    {
      name: "Infosys",
      id: 2
    },
    {
      name: "CTS",
      id: 3
    },
    {
      leftTitle: "Stock Name",
      rightTitle: "Stock Id"
    }
  ],
  status: ""
};

function rootReducer(state = initialState, action) {
  debugger;
  switch (action.type) {
    case FETCH_RECORDS:
      state = Object.assign({}, state, { status: "received" });
      break;
    case ADD_RECORDS:
      state = Object.assign({}, state, { status: "updated" });
      break;
  }
  return state;
}
export default rootReducer;
