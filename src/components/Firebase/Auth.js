import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword } from "firebase/auth";


const Config = {
  apiKey: "AIzaSyBGTxgC3cnS4YR4t2Y1ubIGKNgz9RrLaMQ",
  authDomain: "marvel-quiz-93808.firebaseapp.com",
  projectId: "marvel-quiz-93808",
  storageBucket: "marvel-quiz-93808.appspot.com",
  messagingSenderId: "230758239248",
  appId: "1:230758239248:web:be12418bef3cc9a21ace95"
};

const app = initializeApp(Config)
const auth = getAuth(app)
// signup function
function SignupUser() {
  return  createUserWithEmailAndPassword(auth,email,password)
}
// login function

const Login = () => {
    return  signInWithEmailAndPassword(auth, email, password)
}
// logut function
export default { SignupUser, Login }
