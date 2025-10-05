import React from 'react'
import './Terminals.css'

function TerminalDetail({terminal}) {
    if (!terminal) {
        return (
            <div className="terminal-detail">
                Select a terminal to see details
            </div>
        );
    }

    return (
    <div className="terminal-detail">
      <h2>{terminal.name}</h2>
      <p>{terminal.description}</p>
      <div
        className="terminal-long-description"
        dangerouslySetInnerHTML={{ __html: terminal.long_description }}
      />
      <div className="map-container">
        <a
          href={terminal.mapLocation}
          target='_blank'
          rel='noopener noreferrer'
          className='map-btn'
        >
          View on Map
        </a>
      </div>
    </div>
  );
            
}

export default TerminalDetail