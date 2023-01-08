import { useState } from "react";
import firebase from "firebase/compat/app";
import { db, auth } from "../firebaseCom";
function SendMessage() {
    const [msg, setMsg] = useState<string>('')
    function sendMessage (evt: React.FormEvent<HTMLFormElement>){
        evt.preventDefault()
        const { uid, photoURL } = auth.currentUser
        db.collection('messages').add({
            text: msg,
            uid,
            photoURL,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMsg('')
    }
    return (
      <form onSubmit={sendMessage}>
        <input value={msg} onChange={(evt) => setMsg(evt.target.value)} type="text" />
        <button type="submit">Submit</button>
      </form>
    );
  }
  
  export default SendMessage;