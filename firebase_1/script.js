// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  child,
  remove,
  get,
  update,
} from "https://www.gstatic.com/firebasejs/12.12.1/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1DFSuipYmIT3X5njV5RZjwczMZOr7gHo",
  authDomain: "meapp-c0291.firebaseapp.com",
  databaseURL:
    "https://meapp-c0291-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "meapp-c0291",
  storageBucket: "meapp-c0291.firebasestorage.app",
  messagingSenderId: "1040684877232",
  appId: "1:1040684877232:web:7356a6c99bbc8cc5b6c275",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();
const inpName = document.getElementById("name");
const inpSurname = document.getElementById("surname");
const uid = document.getElementById("uid");
const btnWrite = document.getElementById("btnWrite");
const btnRead = document.getElementById("btnRead");
const btnUpd = document.getElementById("btnUpd");
const btnDel = document.getElementById("btnDel");

function writeData() {
  set(ref(db, "People/" + uid.value), {
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

function readData() {
  const dbRef = ref(db);

  get(child(dbRef, "People/" + uid.value))
    .then((snapshot) => {
      if (snapshot.exists()) {
        alert(
          "Personen heter " +
            snapshot.val().FirstName +
            " " +
            snapshot.val().LastName,
        );
      } else {
        alert("No data found");
      }
    })
    .catch((error) => {
      alert("An error has occured. " + error);
    });
}

function updateData() {
  update(ref(db, "People/" + uid.value), {
    FirstName: inpName.value,
    LastName: inpSurname.value,
  })
    .then(() => {
      alert("Data updated successfully");
    })
    .catch((error) => {
      alert("Error has occured when updating data" + error);
    });
}

function removeData() {
  remove(ref(db, "People/" + uid.value))
    .then(() => {
      alert("Data removed successfully");
    })
    .catch((error) => {
      alert("Error has occured when removing data" + error);
    });
}

btnWrite.addEventListener("click", writeData);
btnRead.addEventListener("click", readData);
btnUpd.addEventListener("click", updateData);
btnDel.addEventListener("click", removeData);
