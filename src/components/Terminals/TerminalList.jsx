import React, { useEffect, useState } from 'react'
import './Terminals.css'

function TerminalList({onSelect, selectedId}) {
  const [terminals, setTerminals] = useState([]);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/e3ob/wm-test/refs/heads/main/terminal.json")
      .then((response) => response.json())
      .then((data) => {
        setTerminals([...data.data, ...data.data]);
      })
      .catch((error) => console.error("Error Fetching:", error));
  }, []);

  const handleCardClick = (item) => {
    if (onSelect) {
      onSelect(item)
    }
  }


  return (
    <div className="terminal-container">
      <h1 className='terminal-name'>Terminals</h1>
      <div className='terminal-cards-wrapper'>
        <div className='terminal-cards'>
          {terminals.map((item,index) => (
            <div
              key={`${item.id}-${index}`}
              onClick={() => handleCardClick(item)}
              className={`terminal-content ${selectedId === item.id ? 'selected' : ''}`}>
              <h2>{item.name}</h2>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TerminalList;
