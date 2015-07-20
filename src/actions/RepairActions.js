import { CREATE_NEW_REPAIR, RECEIVE_REPAIR_ITEM, SEND_REPAIR_ITEM, RETRIEVE_REPAIR_ITEM, SHIP_REPAIR_ITEM, LOAD_REPAIR_ITEM } from '../constants/ActionTypes';

export function receive() {
  return {
    type: RECEIVE_REPAIR_ITEM
  };
}

export function send() {
  return {
    type: SEND_REPAIR_ITEM
  };
}

export function retrieve() {
  return {
    type: RETRIEVE_REPAIR_ITEM
  };
}

export function ship() {
  return {
    type: SHIP_REPAIR_ITEM
  };
}

export function load() {
  return {
    type: LOAD_REPAIR_ITEM
  };
}