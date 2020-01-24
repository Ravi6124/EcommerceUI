import firebase from 'firebase'
import 'firebase/firestore'
const  firebaseConfig= {
        apiKey: "AIzaSyAH5jyFoKAQrTqykak2IwTmJeFQDxAwEUc",
        authDomain: "league-of-avengers.firebaseapp.com",
        databaseURL: "https://league-of-avengers.firebaseio.com",
        projectId: "league-of-avengers",
        storageBucket: "league-of-avengers.appspot.com",
        messagingSenderId: "1040290868995",
        appId: "1:1040290868995:web:8fcdf9d9fe139f65298336",
        measurementId: "G-VWX4N84C6Z"
      };
  firebase.initializeApp(firebaseConfig);
  firebase.analytics(); 
  const googleauthprovider = new firebase.auth.GoogleAuthProvider();
  const fbProvider = new firebase.auth.FacebookAuthProvider();
  export{
        googleauthprovider,
        fbProvider,
  }