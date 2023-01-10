import { useState } from "react";
import firebase from "firebase/compat/app";
import { db, auth, storage, uploadBytes, ref, getDownloadURL } from "../firebaseCom";

interface messageNotImg {
  displayName: string
  imageUrl?: string
  photoURL: string
  text: string
  uid: string
  createdAt: any
}

function SendMessage({ scroll }: any) {

  const [imageUpload, setImageUpload] = useState<any>(null);
  const [msg, setMsg] = useState<string>('')

  function uploadImg() {
    const imageRef = ref(storage, `img/${imageUpload.name + Math.floor(Math.random() * 1000) + 1}`);
    const { uid, photoURL, displayName } = auth.currentUser
    const objToUpload: messageNotImg = {
      text: msg,
      uid,
      displayName,
      photoURL,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    }
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url: string) => {
        db.collection('messages').add({ ...objToUpload, imageUrl: url, })
      });
    });
  }
  function sendMessage(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault()
    const { uid, photoURL, displayName } = auth.currentUser
    const objToUpload: messageNotImg = {
      text: msg,
      uid,
      displayName,
      photoURL,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    }
    if (msg !== '' && imageUpload === null) {
      db.collection('messages').add(objToUpload)
    }
    else if (msg !== '' && imageUpload !== null) {
      uploadImg()
    }
    else if (msg === '' && imageUpload !== null) {
      uploadImg()
    }
    setMsg('')
    setImageUpload(Math.floor(Math.random() * 100) + 1)
    setImageUpload(null)
    scroll()
  }
  function fileItmeChange(evt: any) {
    setImageUpload(evt.target.files[0])
  }
  return (
    <form onSubmit={sendMessage}>
      <div>
        <input className="write" value={msg} onChange={(evt) => setMsg(evt.target.value)} type="text" />
        <button className="submit" type="submit">💬</button>
      </div>
      <div className="file-select" id="src-file1" >
        <input className="selectFile" name="src-file1" aria-label="Archivo" onChange={fileItmeChange} key={imageUpload} type="file" accept="image/png, image/jpeg" />
      </div>
    </form>
  );
}

export default SendMessage;