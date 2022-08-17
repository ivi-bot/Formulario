var express = require('express');
var router = express.Router();
const { initializeApp, applicationDefault } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

const firebase = require("firebase");

firebase.initializeApp({
    credential: firebase.credential.applicationDefault(),
    databaseURL: "https://actividad20munoz-default-rtdb.firebaseio.com",

});

const db = firebase.getFirestore();

router.get("/prueba", async (req, res) => {
    try {
      const querySnapshot = await db.collection("collection").get();
      const contacts = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      res.render("prueba", { contacts });
    } catch (error) {
      console.error(error);
    }
  });

/*
initializeApp({
  credential: applicationDefault(),
});

const db = getFirestore();
*/
module.exports = {
  db,
};




/*

const firebase = require("firebase");
const firebaseConfig = {
    apiKey: "AIzaSyDio7ojugCzGbdR58QdCLEpIkq4YZpUBlU",
    authDomain: "actividad20munoz.firebaseapp.com",
    databaseURL: "https://actividad20munoz-default-rtdb.firebaseio.com",
    projectId: "actividad20munoz",
    storageBucket: "actividad20munoz.appspot.com",
    messagingSenderId: "270431794606",
    appId: "1:270431794606:web:6c196efd1d443190f2043f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db=firebase.firestore();
const compradores = db.collection("collection");

module.exports=compradores;
//export const getTask = (id) => getDoc(doc(db, "tasks", id));


//export const getTasks = () => getDocs(collection(db, "collection"));*/