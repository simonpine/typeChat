import SignOut from "./signOut";
import { useState, useEffect } from "react";
import { db } from "../firebaseCom";
import SendMessage from "./sendMessage";
function Chat() {
  const [messages, setMessages] = useState<Array<any>>([])
  useEffect(() => {
    db.collection("messages").orderBy('createdAt').limit(20).onSnapshot((snap) => {
      setMessages(snap.docs.map(doc => doc.data()))
    })
  }, [])
  return (
    <div >
      <SignOut />
      <div>
        {
          messages.map((mes: any) => {
            if (mes.imageUrl) {
              return (
                <div>
                  <h1>{mes.displayName}: {mes.text}</h1>
                  <img src={mes.imageUrl} />
                </div>
              )

            }
             return <h1>{mes.displayName}: {mes.text}</h1>
          })
        }
        <SendMessage />
      </div>
    </div>
  );
}

export default Chat;