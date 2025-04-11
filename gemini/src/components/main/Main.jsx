import React, { useState, useContext } from 'react';
import './Main.css';
import { assets } from '../../assets/assets'; // Adjust path based on folder
import { Context } from '../../context/Context';// Import Context

const Main = () => {
  const { onSent, showResult, setShowResult, resultData } = useContext(Context);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (input.trim() === '') return;
    
    try {
      setLoading(true);
      await onSent(input);
      setInput('');
      // No need to set response here as resultData will be updated by the context
    } catch (error) {
      console.error("Error handling send:", error);
      // Handle error appropriately
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='main'>
      {/* Navbar */}
      <div className='nav'>
        <p>Gemini</p>
        <img src={assets.user_icon} alt='' />
      </div>

      <div className="main-container">
        {/* Conditionally display greeting and cards or result */}
        {!showResult ? (
          <>
            <div className="greet">
              <p><span>Hello, Dev</span></p>
              <p>How can I help you today?</p>
            </div>

            {/* Cards */}
            <div className='cards'>
              <div className='card' onClick={() => setInput('Give me insights of latest AI trends.')}>
                <p>Give me insights of latest AI trends.</p>
                <img src={assets.message_icon} alt='' />
              </div>
              <div className='card' onClick={() => setInput('Briefly summarize this concept: urban planning')}>
                <p>Briefly summarize this concept: urban planning</p>
                <img src={assets.bulb_icon} alt='' />
              </div>
              <div className='card' onClick={() => setInput('Suggest some beautiful places near Bombay.')}>
                <p>Suggest some beautiful places near Bombay.</p>
                <img src={assets.compass_icon} alt='' />
              </div>
              <div className='card' onClick={() => setInput('Improve the readability of the code.')}>
                <p>Improve the readability of the code.</p>
                <img src={assets.code_icon} alt='' />
              </div>
            </div>
          </>
        ) : (
          <div className='result'>
            {loading ? (
              <div className='loader'>
                <hr/>
                <hr/>
                <hr/>
              </div>
            ) : (
              <div className="response-container">
                <img src={assets.gemini_icon} alt="Gemini" className="gemini-icon" />
                <div className="response-content">
                  <div className="formatted-response">
                    {resultData.split('\n').map((line, index) => (
                      line.trim() === '' ? 
                        <br key={index} /> : 
                        <p key={index}>{line}</p>
                    ))}
                  </div>
                </div>
              </div>
            )}
            
            <div className='new-chat-button' onClick={() => setShowResult(false)}>
              <img src={assets.new_chat_icon} alt="" />
              <p>New Chat</p>
            </div>
          </div>
        )}

        {/* Chat Section */}
        <div className="main-bottom">
          {/* Search Box */}
          <div className="search-box">
            <input
              type="text"
              placeholder="Enter a prompt here"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <div style={{ cursor: 'pointer', display: 'flex', gap: '10px' }}>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input?
              <img 
                onClick={handleSend} 
                src={assets.send_icon} 
                alt="" 
                style={{ cursor: loading ? 'not-allowed' : 'pointer' }}
              />:null}
            </div>
          </div>

          {/* Loading indicator */}
          {loading && (
            <div className="loading-indicator">
              <p>Getting response...</p>
            </div>
          )}

          {/* Footer Info */}
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so double check before you trust it. It's not a substitute for professional advice.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;