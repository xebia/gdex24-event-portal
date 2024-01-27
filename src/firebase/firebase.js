// Import the functions you need from the SDKs you need
import { initializeApp, getApps  } from "firebase/app";
import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVxk1NQLeHzd6ibSHGvKww3ctk2KdfX_0",
  authDomain: "global-devops-experience.firebaseapp.com",
  projectId: "global-devops-experience",
  storageBucket: "global-devops-experience.appspot.com",
  messagingSenderId: "1021726338520",
  appId: "1:1021726338520:web:ce0ba19e00b3a6ed5396ad"
};

// Initialize Firebase
// Initialize Firebase
let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export const auth = getAuth(app);
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a GitHub Access Token. You can use it to access the GitHub API.
    const credential = GithubAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GithubAuthProvider.credentialFromError(error);
    // ...
  });
export default firebase_app;