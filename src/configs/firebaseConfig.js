import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBO7vmB293Wr0sUfTlK9kULnIYavTnIovo',
  authDomain: 'project-marvel-website.firebaseapp.com',
  projectId: 'project-marvel-website',
  storageBucket: 'project-marvel-website.appspot.com',
  messagingSenderId: '568178347696',
  appId: '1:568178347696:web:d5e0074ab60d8301d23575',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
