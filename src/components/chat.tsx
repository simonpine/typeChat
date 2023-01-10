import { useState, useEffect, useRef } from "react";
import { db, auth } from "../firebaseCom";
import SendMessage from "./sendMessage";
function Chat() {
  const dummy = useRef<any>()
  const [messages, setMessages] = useState<Array<any>>([])
  useEffect(() => {
    db.collection("messages").orderBy('createdAt').onSnapshot((snap) => {
      setMessages(snap.docs.map(doc => doc.data()))
      dummy.current.scrollIntoView({ behavior: 'smooth' })
    })
  }, [])
  function scroll() {
    dummy.current.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <div className="chat" >

      <div className="messagesCont">
        {
          messages.map((mes: any) => {
            if (mes.imageUrl) {
              return (
                <div key={Math.floor(Math.random() * 1000) + 1} className={`${mes.uid === auth.currentUser.uid ? 'mesCont2' : 'mesCont'}`}>
                  <div className={`${mes.uid === auth.currentUser.uid ? 'mes2' : 'mes'}`}>
                    <img className="photoPerfil" src={mes.photoURL} />
                    <div className="content">
                      <h3>{mes.displayName}</h3>
                      <h2>{mes.text}</h2>
                      <img className="imgSend" src={mes.imageUrl} />
                    </div>
                  </div>
                </div>
              )

            }
            else {
              return (
                <div key={Math.floor(Math.random() * 1000) + 1} className={`${mes.uid === auth.currentUser.uid ? 'mesCont2' : 'mesCont'}`}>
                  <div className={`${mes.uid === auth.currentUser.uid ? 'mes2' : 'mes'}`}>
                    <img className="photoPerfil" src={mes.photoURL} />
                    <div className="content">
                      <h3>{mes.displayName}</h3>
                      <h2>{mes.text}</h2>
                    </div>
                  </div>
                </div>
              )
            }
          })
        }
        <div ref={dummy} ></div>
      </div>
      <button className="down" onClick={scroll} >🡻</button>
      <SendMessage scroll={scroll} />
    </div>
  );
}

export default Chat;