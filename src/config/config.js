import firebase from 'firebase/app';
import 'firebase/database';

const FB_CONFIG = {
  apiKey: "AIzaSyAyqK2S7kYQh43gAGo8xCUazsoJrVa2xIA",
  authDomain: "react-notes-95405.firebaseapp.com",
  databaseURL: "https://react-notes-95405.firebaseio.com",
  projectId: "react-notes-95405",
  storageBucket: "",
  messagingSenderId: "882099250125",
  appId: "1:882099250125:web:b3770abaa2c3d9c4269a84"
};

firebase.initializeApp(FB_CONFIG);

export default firebase;