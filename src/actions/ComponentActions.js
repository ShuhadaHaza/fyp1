import firebase from 'firebase';
//import {Actions} from 'react-native-router-flux';

import {
    COMPONENT_FETCH_SUCCESS
}
from './types';
export const componentFetch= () =>{
  //const {currentUser} =firebase.auth();
    return(dispatch) =>{
        firebase.database().ref(`/user/userId/component`)
            .on('value',snapshot =>{
                dispatch({type: COMPONENT_FETCH_SUCCESS, payload: snapshot.val()});

            });
    };
};