import {initializeApp} from "firebase/app"
import "firebase/auth";
import { getAuth, GoogleAuthProvider,signInWithPopup } from "firebase/auth";

// const config = firebase.initializeApp({
//     apiKey: "AIzaSyBpRw50RS-RnWoHMYK9eFu-ahi27IHdQqY",
//     authDomain: "authtutorial-c8da4.firebaseapp.com",
//     projectId: "authtutorial-c8da4",
//     storageBucket: "authtutorial-c8da4.appspot.com",
//     messagingSenderId: "182712740706",
//     appId: "1:182712740706:web:a11c4185d04537a6e9da3b",
//     measurementId: "G-DP4B2CK9XL"
// });

const firebaseConfig = {
    apiKey: "AIzaSyAKNCZTtj6IB6LJFLDfVisnYjSP0pkavmc",
    authDomain: "netflix-auth-881e6.firebaseapp.com",
    projectId: "netflix-auth-881e6",
    storageBucket: "netflix-auth-881e6.appspot.com",
    messagingSenderId: "422864864734",
    appId: "1:422864864734:web:983b3a968cd7bcb52b094f",
    measurementId: "G-J9W9WWG6DG"
  };
  const app=initializeApp(firebaseConfig)

export const auth = getAuth(app)

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => signInWithPopup(auth,provider)
.then((result) => {
    console.log(result)
}).catch((error)=>{
    console.log(error);
});

export default firebaseConfig;