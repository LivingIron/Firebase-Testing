import {initializeApp} from "firebase/app";
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";
import {getDatabase,ref,set} from "firebase/database";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyAULB25HBSmbizHeqcqI-Q5vUF_u2L8POY",
  authDomain: "fir-testing-f99e1.firebaseapp.com",
  databaseURL: "https://fir-testing-f99e1-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fir-testing-f99e1",
  storageBucket: "fir-testing-f99e1.appspot.com",
  messagingSenderId: "982832924130",
  appId: "1:982832924130:web:3d5ad4b7c609b9bf7125bb",
  measurementId: "G-V38VGEVLCE"
});

const auth= getAuth(firebaseApp);
const db = getDatabase(firebaseApp);


export const writeUserData = (userId,name,email) =>{
    const reference = ref(db,"users/"+userId);
    set(reference,{
        username:name,
        email:email,
    })
}



export const createUser = async (email,password) =>{
    try{
        const response = await createUserWithEmailAndPassword(auth,email,password);
        const user = await response.user;
    }catch(error){
        console.log(error);
    }
}

export const loginUser = (email,password) =>{
    signInWithEmailAndPassword(auth,email,password)
    .then((userCredential)=>{
        const user = userCredential.user;
    })
    .then(()=> console.log("Logged in !"))
    .catch((error)=>{
        const errorCode=error.code;
        const errorMessage = error.message;
    })
}
