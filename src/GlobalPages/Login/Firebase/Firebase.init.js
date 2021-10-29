import { initializeApp } from "firebase/app";
import firebaseConfigg from "./firebase.configg";

const initializeAuthentication = () => {
  initializeApp(firebaseConfigg);
};
export default initializeAuthentication;
