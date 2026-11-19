// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-app.js";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
} from "https://www.gstatic.com/firebasejs/13.4.0/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyC5K0SLMr67PMchW7XCG-Hla5mm0_k74C8",

  authDomain: "firestore-5493d.firebaseapp.com",

  projectId: "firestore-5493d",

  storageBucket: "firestore-5493d.firebasestorage.app",

  messagingSenderId: "670046353724",

  appId: "1:670046353724:web:bb86cfb9bcd4ced1e8c639",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const inpName = document.getElementById("name");
const inpSurname = document.getElementById("surname");
const uid = document.getElementById("uid");
const btnWrite = document.getElementById("btnWrite");
const btnRead = document.getElementById("btnRead");
const btnUpd = document.getElementById("btnUpd");
const btnDel = document.getElementById("btnDel");

async function AddDocument_AutoID() {
  const ref = collection(db, "Folk");

  const docRef = await addDoc(ref, {
    FirstName: inpName.value,
    LastName: inpSurname.value,
    UID: uid.value,
  })
    .then(() => {
      alert("Data stored successfully");
    })
    .catch((error) => {
      alert("Error has occured when storing data" + error);
    });
}

async function AddDocument_CustomID() {
  const ref = doc(db, "Folk", uid.value);

  await setDoc(ref, {
    FirstName: inpName.value,
    LastName: inpSurname.value,
    UID: uid.value,
  })
    .then(() => {
      alert("Data stored successfully");
    })
    .catch((error) => {
      alert("Error has occured when storing data" + error);
    });
}

async function GetDocument() {
  const ref = doc(db, "Folk", uid.value);
  const docSnap = await getDoc(ref);

  if (docSnap.exists()) {
    inpName.value = docSnap.data().FirstName;
    inpSurname.value = docSnap.data().LastName;
  } else {
    alert("No data found");
  }
}

async function UpdateDocumentFields() {
  const ref = doc(db, "Folk", uid.value);

  await updateDoc(ref, {
    FirstName: inpName.value,
    LastName: inpSurname.value,
  })
    .then(() => {
      alert("Data stored successfully");
    })
    .catch((error) => {
      alert("Error has occured when storing data" + error);
    });
}

async function DeleteDocument() {
  const ref = doc(db, "Folk", uid.value);
  const docSnap = await getDoc(ref);

  if (docSnap.exists()) {
    await deleteDoc(ref)
      .then(() => {
        alert("Data deleted successfully");
      })
      .catch((error) => {
        alert("Error has occured when deleting data" + error);
      });
  } else {
    alert("No data found");
  }
}

btnWrite.addEventListener("click", AddDocument_CustomID);
btnRead.addEventListener("click", GetDocument);
btnUpd.addEventListener("click", UpdateDocumentFields);
btnDel.addEventListener("click", DeleteDocument);
