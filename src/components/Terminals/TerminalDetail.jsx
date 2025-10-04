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
        dangerouslySetInnerHTML={{ __html: terminal.long_description }}
      />
      <div className="map-container">
        <iframe
          src={terminal.mapLocation}
          title="map"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
            
}

export default TerminalDetail