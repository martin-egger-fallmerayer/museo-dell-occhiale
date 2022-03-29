import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyB5s2vo-pVMfe1s_pQHY4uiZRPis2NUezU",
	authDomain: "database-visualization.firebaseapp.com",
	projectId: "database-visualization",
	storageBucket: "database-visualization.appspot.com",
	messagingSenderId: "387405027701",
	appId: "1:387405027701:web:4a3b23386c0bbfe68bdb3c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
