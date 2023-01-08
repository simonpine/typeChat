import firebase from "firebase/compat/app";
import { auth } from "../firebaseCom";
function SignIn() {
    function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }
    return (
      <div className="App">
        <button onClick={signInWithGoogle}>Sign in with google</button>
      </div>
    );
  }
  
  export default SignIn;