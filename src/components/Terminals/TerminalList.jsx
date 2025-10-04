import React from 'react'
import './Terminals.css'

function TerminalList({terminals, onSelect, selectedId}) {
  return (
    <>
        <div className="terminal-list">
            <h2>🚏 Terminals</h2>
            <ul>
                {terminals.map((terminal) => (
                    <li
                        key={terminal.id}
                        onClick={() => onSelect(terminal)}
                        className={selectedId === terminal.id ? "active" : ""}
                    >
                        {terminal.name}
                    </li>
                ))}
            </ul>
        </div>
    </>
  )
}

export default TerminalList