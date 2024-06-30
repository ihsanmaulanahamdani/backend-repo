import admin from "firebase-admin";

import { getFirestore } from "firebase-admin/firestore";

var serviceAccount = require("../ebuddy-backend-repo-firebase-adminsdk-x90j6-cce5d5934c.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export const db = getFirestore();

export default admin;
