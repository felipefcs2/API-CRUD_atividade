// CONFIGURAÇÃO FIREBASE REALTIME DATABASE
/*
const admin = require("firebase-admin");

// Renomeie o arquivo serviceAccountKey-exemplo.json
// para serviceAccountKey.json e coloque suas credenciais do Firebase.

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://correcaokodular-default-rtdb.firebaseio.com/"
});

const db = admin.database();

module.exports = db;
*/

const admin = require("firebase-admin");

const serviceAccount = JSON.parse(
  process.env.FIREBASE_SERVICE_ACCOUNT
);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://api-crud-1f486-default-rtdb.firebaseio.com/"
});

const db = admin.database();
module.exports = db;
