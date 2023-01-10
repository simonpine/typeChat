import { auth } from "../firebaseCom";
function SignOut() {

    return (
      <div>
        <button className="sign" onClick={()=> auth.signOut()} >Sign out</button>
      </div>
    );
  }
  
  export default SignOut;