import firebase from 'config/firebase/'

export const actionUserName = () => dispatch => {
  setTimeout(() => {
    return dispatch({ type: "CHANGE_USER", value: "DANIL RAFIQI" });
  }, 2000);
};

export const registerUserApi = (data)=> (dispatch) =>{
  dispatch({type:"CHANGE_ISLOADING", value:true})
  return (
    firebase
    .auth()
    .createUserWithEmailAndPassword(data.email, data.password)
    .then(res => {
      dispatch({type:"CHANGE_ISLOADING", value:false})
    })
    .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        dispatch({type:"CHANGE_ISLOADING", value:false})
    })
  )
}