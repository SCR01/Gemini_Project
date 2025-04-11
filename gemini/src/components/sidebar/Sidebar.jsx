/* eslint-disable no-unused-vars */
import React, { useState, useContext } from 'react';
import './Sidebar.css';
import { Context } from '../../context/Context';
import { assets } from '../../assets/assets'; // Assuming you have an assets.js file exporting assets

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const { onSent, previousPrompts, setRecentPrompt } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  return (
    <div className="sidebar">
      <div className="top">
        <img
          onClick={() => setExtended(prev => !prev)}
          className="menu"
          src={assets.menu_icon}
          alt="Menu"
        />

        <div className="new-chat">
          <img className="new-chat-icon" src={assets.plus_icon} alt="New Chat" />
          {extended && <p>New Chat</p>}
        </div>

        {extended && (
          <div className="recent">
            <p className="recent-title">Recent Chats</p>
            {previousPrompts.map((item, index) => (
              <div key={index} onClick={() => loadPrompt(item)} className="recent-entry">
                <img className="recent-icon" src={assets.message_icon} alt="Message" />
                <p>{item.length > 20 ? item.substring(0, 20) + "..." : item}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom buttons */}
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img className="recent-icon" src={assets.question_icon} alt="Help" />
          {extended && <p>Help</p>}
        </div>

        <div className="bottom-item recent-entry">
          <img className="recent-icon" src={assets.history_icon} alt="Activity" />
          {extended && <p>Activity</p>}
        </div>

        <div className="bottom-item recent-entry">
          <img className="recent-icon" src={assets.setting_icon} alt="Settings" />
          {extended && <p>Settings</p>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
