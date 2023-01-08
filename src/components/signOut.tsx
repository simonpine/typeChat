import { auth } from "../firebaseCom";
function SignOut() {

    return (
      <div>
        <button onClick={()=> auth.signOut()} >Sign out</button>
      </div>
    );
  }
  
  export default SignOut;