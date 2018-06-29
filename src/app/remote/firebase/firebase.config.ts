import * as firebase from 'firebase';

firebase.initializeApp({
    apiKey: 'AIzaSyDMxWBRdLxCk4wnpHT673rOTkTKPVTKEL4',
    authDomain: 'fir-database-aa5ed.firebaseapp.com',
    databaseURL: 'https://fir-database-aa5ed.firebaseio.com',
    projectId: 'fir-database-aa5ed',
    storageBucket: 'fir-database-aa5ed.appspot.com',
    messagingSenderId: '1091008851115'
});
console.log('firebase.initializeApp is triggered');
export default firebase;
