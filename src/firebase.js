import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCUX1PA-0l8jemRsm4CPSq-08N4rF_0XEM",
    authDomain: "slack-clone-bde86.firebaseapp.com",
    projectId: "slack-clone-bde86",
    storageBucket: "slack-clone-bde86.appspot.com",
    messagingSenderId: "677720292747",
    appId: "1:677720292747:web:3c6a383f1fee64bd79c38e"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider, db };