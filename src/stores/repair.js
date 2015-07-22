import { CREATE_NEW_REPAIR, RECEIVE_REPAIR_ITEM, SEND_REPAIR_ITEM, RETRIEVE_REPAIR_ITEM, SHIP_REPAIR_ITEM, LOAD_REPAIR_ITEM, SOMETHING_STARTED, SOMETHING_COMPLETED, SOMETHING_FAILED } from '../constants/ActionTypes';


const initialState = {
  repair_id: "R0000001",
  name: 'New Customer',
  shipping_address: "no 6",
  price: 0,
  repair_state: "new"
};

export default function repair(state = initialState, action) {
  // let {repair_state, ...others} = state;
  switch (action.type) {
    case RECEIVE_REPAIR_ITEM:
      return {...state, repair_state: "received"};
    case SEND_REPAIR_ITEM:
      return {...state, repair_state: "repairing"};
    case RETRIEVE_REPAIR_ITEM:
      return {...state, repair_state: "repaired"};
    case SHIP_REPAIR_ITEM:
      return {...state, repair_state: "shipped"};
    case LOAD_REPAIR_ITEM:
      return {...state, load: "loaded"};
    case SOMETHING_STARTED:
      return {...state, load: "started"};
    case SOMETHING_COMPLETED:
      return {...state, data: action.result, load: "completed"};
    case SOMETHING_FAILED:
      return {...state, load: "failed"};
    default:
      return state;
  }
}
