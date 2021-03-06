import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import firebase from "firebase/app";
import { authState } from "rxfire/auth";
import { collectionData, docData } from "rxfire/firestore";
import { filter } from "rxjs/operators";

const firebaseConfig = {
  apiKey: "AIzaSyDhAagW0f1AnjX802_SSD9cO0F2cXYi5fo",
  authDomain: "hotblocks-140ad.firebaseapp.com",
  databaseURL: "https://hotblocks-140ad.firebaseio.com",
  projectId: "hotblocks-140ad",
  storageBucket: "hotblocks-140ad.appspot.com",
  messagingSenderId: "299970232275",
  appId: "1:299970232275:web:2049f9a30d869f9f117926",
  measurementId: "G-7JBZHKPHQW",
};
const app = firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore(app);
const storage = firebase.storage(app);
const auth = firebase.auth(app);
const loggedIn$ = authState(auth).pipe(filter((user) => !!user));

export { app, auth, firestore, storage, collectionData, docData, loggedIn$ };
export default firebase;

export const addresses = (crypto) => {
  switch (crypto) {
    case "BTC":
      return "1EepRbmuMDmXdpDKynB8TaMMT2zZF2EPyw";
    case "ETH":
      return "0x7D62Fac09F1991F613127cE3158B1B5d7FcE521b";
    case "BTCC":
      return "qz2up8g2chgarrrynaw0q25rhqkw2reyss84fcxdl4";
    default:
      return "1EepRbmuMDmXdpDKynB8TaMMT2zZF2EPyw";
  }
};
