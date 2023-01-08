// import firebase from "firebase/compat";
import firebase from "firebase/compat/app";
import { auth } from "../firebaseCom";
function SignIn() {
    const signInwithGoogle = (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
        const provider: firebase.auth.GoogleAuthProvider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)

    }
    return (
      <div className="App">
        <button onClick={signInwithGoogle}>Sign in with google</button>
      </div>
    );
  }
  
  export default SignIn;