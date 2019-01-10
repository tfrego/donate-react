import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDg-k6_xNaZY-8ah4wjbxadEM-3fYSFWmw",
  authDomain: "trang-donate-app.firebaseapp.com",
  databaseURL: "https://trang-donate-app.firebaseio.com",
  projectId: "trang-donate-app",
  storageBucket: "trang-donate-app.appspot.com",
  messagingSenderId: "233559537420"
};
firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;
