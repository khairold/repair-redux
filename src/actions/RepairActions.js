import { CREATE_NEW_REPAIR, RECEIVE_REPAIR_ITEM, SEND_REPAIR_ITEM, RETRIEVE_REPAIR_ITEM, SHIP_REPAIR_ITEM, LOAD_REPAIR_ITEM, SOMETHING_STARTED, SOMETHING_COMPLETED, SOMETHING_FAILED } from '../constants/ActionTypes';

import Firebase from 'firebase';
let myRootRef = new Firebase('https://prio.firebaseio.com');


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

export function doSomethingAsync() {
  return (dispatch) => {
    dispatch({ type: SOMETHING_STARTED });

    return requestSomething().then(
      (result) =>  dispatch({ type: SOMETHING_COMPLETED, result }),
      (error) =>  dispatch({ type: SOMETHING_FAILED, error })
    );
  };
}

function requestSomething() {
  return new Promise(function(resolve, reject) {
    // do a thing, possibly async, then…

    myRootRef.set({ first: 'Fred', last: 'Flintstone' }, function(error) {
      if (error) {
        console.log('Synchronization failed');
        reject(Error("It broke"));
      } else {
        console.log('Synchronization succeeded');
        resolve("Stuff worked!");
      }
    });

    // setTimeout(function() {
    //   if (true) {
    //     resolve("Stuff worked!");
    //   }
    //   else {
    //     reject(Error("It broke"));
    //  } 
    // }, 2000);

  });
};

