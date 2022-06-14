import firebase from 'firebase';

// add SDK Firebase
    const firebaseConfig = {
        apiKey: "AIzaSyBOLDBPRw0oPcfyICp6dj_ZG3zDUTMdGLA",
        authDomain: "team-voting-e4ee4.firebaseapp.com",
        projectId: "team-voting-e4ee4",
        storageBucket: "team-voting-e4ee4.appspot.com",
        messagingSenderId: "37550367443",
        appId: "1:37550367443:web:d5883bf006c055edf1aa26"
      };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();