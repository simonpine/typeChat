import React from 'react';
import './App.scss';
import Chat from './components/chat';
import SignIn from './components/signIn';
import { auth } from './firebaseCom'
import { useAuthState } from 'react-firebase-hooks/auth'

function App() {
  const [user] = useAuthState(auth)
  return (
    <>
      {user ? <Chat /> : <SignIn />}
    </>
  );
}

export default App;