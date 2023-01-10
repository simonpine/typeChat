import firebase from "firebase/compat/app";
import { auth } from "../firebaseCom";
function SignIn() {
    function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }
    return (
      <div className="signInCont">
        <button className="sign" onClick={signInWithGoogle}>Sign in with google</button>
      </div>
    );
  }
  
  export default SignIn;