// src/ImportBox.js
import React, { useEffect, useState } from 'react';
import './MsgBox.css'; // Import the styles

const MsgBox = ({ onClose, msg, msgType }) => {
  //const [msgType, setMsgType] = useState('');

  const handleButton = () => {
    onClose()
  };

  return (
    <div className="url-box">
      <span className="close-icon" onClick={onClose}>X</span>
      <div className="image-space">
        <p>{msg}</p> 
      </div>
      <div className='button-group'>
        <button className='preview-button' onClick={handleButton}>
          {
            msgType === 'error' ? 'Close' : 'Done'
          }
        </button>
      </div>
    </div>
  );
};

export default MsgBox;
