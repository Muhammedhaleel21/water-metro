import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import TerminalList from '../../components/Terminals/TerminalList'
import TerminalDetail from '../../components/Terminals/TerminalDetail';
import './TerminalPage.css'

function TerminalPage() {

  const [terminals,setTerminals] = useState([]);
  const [selectedTerminal, setSelectedTerminals] = useState(null)

  useEffect(() =>{
    fetch("https://raw.githubusercontent.com/e3ob/wm-test/refs/heads/main/terminal.json")
    .then((response) => response.json())
    .then((data) => {
      setTerminals(data.data);
      setSelectedTerminals(data.data[0]);
    })
    .catch((error) => console.error("Error fetching data:",error));
  },[])

  return (
    <>
        <Navbar/>
        <div className="main-container">
          <TerminalList
            terminals={terminals}
            onSelect={setSelectedTerminals}
            selectedId={selectedTerminal?.id}
          />
          <TerminalDetail terminal={selectedTerminal} />
        </div>
        
    </>
  )
}

export default TerminalPage