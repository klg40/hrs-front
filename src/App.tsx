import React, {useEffect} from 'react';
import { io } from 'socket.io-client';

const socket = io('ws://localhost:4000');

function App() {

    useEffect(() => {
        socket.emit('mount')
    }, [])

    const handleClick = () => {
        socket.emit('ping', Date.now())
    }

  return (
      <button onClick={handleClick}>Click</button>
  );
}

export default App;
