import { https } from "firebase-functions";
import * as admin from "firebase-admin";


const config = {};
admin.initializeApp(config);
const db = admin.firestore()

export const helloWorld = https.onCall(async (data) => {
  const email = data.email;
  const message = data.message;
  if(!email || !message) {
    return "Error"
  }

  const setdb = await db.collection("messages").doc("F8SHiTTjkDUZ55VDqbir").set({email: message});
  return setdb;
});
