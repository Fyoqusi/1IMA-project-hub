// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";

import {
  getDatabase,
  ref,
  set,
  child,
  remove,
  get,
  update,
} from "https://www.gstatic.com/firebasejs/12.12.1/firebase-database.js";

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyB-687DL5YQ2XE8tqgsGMFzHy8i3Kiz2OM",
  authDomain: "oppslagstavle-6475d.firebaseapp.com",
  projectId: "oppslagstavle-6475d",
  storageBucket: "oppslagstavle-6475d.firebasestorage.app",
  messagingSenderId: "821034107539",
  appId: "1:821034107539:web:1672089fc36ff6ddf24366",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const db = getDatabase();
const inpEmne = document.getElementById("inpEmne");
