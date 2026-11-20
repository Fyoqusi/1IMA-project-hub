// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/12.12.1/firebase-auth.js";
import {
  getFirestore,
  setDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/12.12.1/firebase-firestore.js";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZpaerlPQrRFAc40oNbzBRvtcfZxm_cAc",
  authDomain: "login-b5486.firebaseapp.com",
  projectId: "login-b5486",
  storageBucket: "login-b5486.firebasestorage.app",
  messagingSenderId: "855151879328",
  appId: "1:855151879328:web:82e5a1949841c5a0ad95c5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const messageDiv = document.getElementById("signUpMessage");

function showMessage(message) {
  messageDiv.innerHTML = message;
  messageDiv.style.display = "block";
  setTimeout(() => {
    messageDiv.style.display = "none";
  }, 5000);
}

try {
  const signUp = document.getElementById("submitSignUp");

  signUp.addEventListener("click", (event) => {
    event.preventDefault();
    const name = document.getElementById("inpName").value;
    const email = document.getElementById("inpEmail").value;
    const password = document.getElementById("inpPass").value;
    const passwordConfirm = document.getElementById("inpPassConfirm").value;

    if (password !== passwordConfirm) {
      showMessage("Passwords do not match.");
      return;
    }

    const auth = getAuth();
    const db = getFirestore();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const userData = {
          email: email,
          name: name,
        };

        const docRef = doc(db, "users", user.uid);
        setDoc(docRef, userData)
          .then(() => {
            showMessage("Account created successfully!");
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        showMessage("Unable to create user: " + error.message);
        console.error(error);
      });
  });
} catch {}
try {
  const logIn = document.getElementById("submitLogIn");

  logIn.addEventListener("click", (event) => {
    event.preventDefault();
    const email = document.getElementById("inpEmail").value;
    const password = document.getElementById("inpPass").value;
    const currentUser = document.getElementById("currentUser");
    const signOut = document.getElementById("signOut");

    const db = getFirestore();

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        showMessage("Successfully signed in!");
        currentUser.innerText = user.email;
        signOut.style.display = "block";
        console.log(user);
      })
      .catch((error) => {
        showMessage("Unable to login: " + error.message);
        console.error(error);
      });
  });
} catch (error) {}

try {
  const signOutBtn = document.getElementById("signOut");

  signOutBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const currentUser = document.getElementById("currentUser");
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        showMessage("Sign-out successful.");
        signOutBtn.style.display = "none";
        currentUser.innerText = "None";
      })
      .catch((error) => {
        showMessage("An error has occured: " + error);
      });
  });
} catch (error) {}
