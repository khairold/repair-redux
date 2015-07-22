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

    // myRootRef.set({ first: 'Fred', last: 'Flintstone' }, function(error) {
    //   if (error) {
    //     console.log('Synchronization failed');
    //     reject(Error("It broke"));
    //   } else {
    //     console.log('Synchronization succeeded');
    //     resolve("Stuff worked!");
    //   }
    // });

    myRootRef.child('R00001').once('value', function (dataSnapshot) {
      // code to handle new value
      console.log('Synchronization succeeded');
      console.log("data: " + dataSnapshot.val());
        resolve(dataSnapshot.val());
    }, function (err) {
      // code to handle read error
      console.log('Synchronization failed');
      console.log("The read failed: " + err.code);
      reject(Error("It broke"));
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

