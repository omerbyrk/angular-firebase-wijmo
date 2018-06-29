import firebase from './firebase.config';
const firestore = firebase.firestore();
firestore.settings({ timestampsInSnapshots: true });
export default firestore;
