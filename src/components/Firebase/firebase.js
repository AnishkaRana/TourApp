

import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {

apiKey: "AIzaSyC3FgWecfrqZYGX3ZOuyAODy0lyNwDnx2c",
authDomain: "chat-e308d.firebaseapp.com",
databaseURL: "https://chat-e308d-default-rtdb.europe-west1.firebasedatabase.app",
projectId: "chat-e308d",
storageBucket: "chat-e308d.appspot.com",
messagingSenderId: "1021210769920",
appId: "1:1021210769920:web:c608653bf60dd667e9f6e5"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;






