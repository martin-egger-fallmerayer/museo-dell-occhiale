import firebase from "firebase-admin";

import serviceAccount from "./database-visualization-firebase-adminsdk-9tx0a-24a6d161bd.json";


const app = !firebase.apps.length
	? firebase.initializeApp({
			//@ts-ignore
			credential: firebase.credential.cert(serviceAccount),
	  })
	: firebase.app();

const db = app.firestore();

export default db;
