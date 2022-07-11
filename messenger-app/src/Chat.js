import SearchOutlined from '@mui/icons-material/SearchOutlined';
import InsertEmoticon from '@mui/icons-material/InsertEmoticon';
import Mic from '@mui/icons-material/Mic';
import AttachFile from '@mui/icons-material/AttachFile';
import MoreVert from '@mui/icons-material/MoreVert';
import { Avatar, IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import "./Chat.css"
import db from './firebase';

function Chat() {
  const [input, setInput] = useState("")
  const [seed, setSeed] = useState("")
  const { roomId } = useParams();
  const [roomName, setRoomName] = useState("");

  useEffect(() => {
    if (roomId) {
      db.collection('rooms').doc(roomId).onSnapshot(snapshot => (
        setRoomName(snapshot.data().name)
      ))
    }
  }, [roomId])

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000))
  }, [roomId]);

  const sendMessage = (e) => {

    e.preventDefault();
    console.log("Yout typed", input);
    setInput('');
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/bottts/${seed}.svg`} />
        <div className="chat__headerInfo">
          <h3>{roomName}</h3>
          <p>Last seen at ...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        <p className={`chat__message ${true && 'chat__receiver'}`}>
          <span className="chat__name">
            Felix Petzsche
          </span>
          Hey Guys
          <span className="chat__timestamp">3:52pm</span>
        </p>
      </div>

      <div className="chat__footer">
        <InsertEmoticon />
        <form>
          <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="type a message" type="text" />
          <button onClick={sendMessage} type="submit">Send a Message</button>
        </form>
        <Mic />
      </div>
    </div>
  );
}

export default Chat