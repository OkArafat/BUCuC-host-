// Import Firebase SDK modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.9.0/firebase-auth.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAS0oD9Gz9Da8uS19h5h0QWZV7DB2Y9BQg",
  authDomain: "bucuc-55cd9.firebaseapp.com",
  projectId: "bucuc-55cd9",
  storageBucket: "bucuc-55cd9.appspot.com",
  messagingSenderId: "92459667010",
  appId: "1:92459667010:web:8b5dd4ff4a564adfd967db",
  measurementId: "G-2XCZB8T5M1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// =================== SIGN UP ===================
const signupForm = document.getElementById("signup-form");

signupForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("signup-main-email").value;
  const password = document.getElementById("signup-password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("✅ You are registered successfully!");
      signupForm.reset();
    })
    .catch((error) => {
      alert("❌ Registration failed: " + error.message);
    });
});

// =================== LOGIN ===================
const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("✅ You are logged in successfully!");
      loginForm.reset();
    })
    .catch((error) => {
      alert("❌ Your information is not valid. Please try again.");
    });
});
