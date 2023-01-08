import SignOut from "./signOut";
import { useState, useEffect } from "react";
import { db } from "../firebaseCom";
import SendMessage from "./sendMessage";
function Chat() {
    const [messages, setMessages]: any = useState([])
    useEffect(() => {
        db.collection("messages").orderBy('createdAt').limit(50).onSnapshot((snap)=>{
            setMessages(snap.docs.map(doc => doc.data()))
        })



    }, [])
    return (
      <div >
        <SignOut />
        <div>
            {
                messages.map((mes: any)=>{
                   return <h1>{mes.text}</h1>
                })
            }
        <SendMessage/>
        </div>
      </div>
    );
  }
  
  export default Chat;