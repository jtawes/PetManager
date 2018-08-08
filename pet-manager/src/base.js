import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyA3PpIfddrH9gL43YAdTuKKvNDXZXpuzf0",
	authDomain: "petmanager-18d72.firebaseapp.com",
	databaseURL: "https://petmanager-18d72.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// named export
export { firebaseApp };

// default export
export default base;