import app from "firebase/app";
import config from "./config.json"

const firebaseApp = app.initializeApp(config);
export default firebaseApp;
