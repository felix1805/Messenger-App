import React from 'react';
import './Sidebar.css';
import { Avatar } from '@mui/material';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <Avatar />
        <div className="sidebar__headerRight">
          <DonutLargeIcon />
          <ChatIcon />
          <MoreVertIcon />  

        </div>
      </div>
      <div className="sidebar_search">

      </div>
      <div className="sidebar_chats">

      </div>
    </div>
  );
}

export default Sidebar;