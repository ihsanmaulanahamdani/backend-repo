import functions from "firebase-functions";
import expressApp from "../../core/app";

exports.api = functions.region('asia-southeast2').https.onRequest(expressApp);
