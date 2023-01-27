import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { auth, db } from "../utils/firebase";
export const registerIntiate = (name, email, password, dispatch, navigate) => {
  dispatch({ type: "REGISTER_INITIATE" });
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed In
      const user = userCredential.user;
      const UID = userCredential.user.uid;
      updateProfile(auth.currentUser, {
        displayName: name,
      });
      setDoc(doc(db, "users/" + UID), {
        displayName: name,
        email_id: email,
      })
        .then(() => {
          // Data saved successfully!
        })
        .catch((error) => {
          console.log(error);
        });
      dispatch({ type: "REGISTER_SUCCESS", payload: user });
      loginInitiate(email, password, dispatch, navigate);
      navigate("/");
    })
    .catch((error) => {
      alert(error.message.replace("Firebase:", ""));
      dispatch({ type: "REGISTER_FAILED", payload: error });
    });
};

export const loginInitiate = (email, password, dispatch, navigate) => {
  dispatch({ type: "LOGIN_INITIATE" });
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Logged In
      dispatch({ type: "LOGIN_SUCCESS", payload: userCredential.user });
      dispatch({
        type: "SET_USER",
        payload: userCredential.user,
      });
      navigate("/");
    })
    .catch((error) => {
      alert(error.message.replace("Firebase:", ""));
      dispatch({ type: "LOGIN_FAILED", payload: error });
    });
};
export const logoutInitiate = (dispatch) => {
  dispatch({ type: "LOGOUT_INITIATE" });
  auth
    .signOut()
    .then(() => {
      // Logged OUT
      dispatch({ type: "LOGOUT_SUCCESS", payload: null });
    })
    .catch((error) => {
      alert(error.message.replace("Firebase:", ""));
      dispatch({ type: "LOGOUT_FAILED", payload: error });
    });
};
