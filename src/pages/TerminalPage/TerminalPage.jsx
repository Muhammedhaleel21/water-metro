import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import TerminalList from '../../components/Terminals/TerminalList'
import TerminalDetail from '../../components/Terminals/TerminalDetail';
import './TerminalPage.css'
import Footer from '../../components/Footer/Footer';
import { useLocation } from 'react-router-dom';

function TerminalPage() {

  
  const [selectedTerminal, setSelectedTerminal] = useState(null)
  const location = useLocation();

  useEffect(() =>{
    fetch("https://raw.githubusercontent.com/e3ob/wm-test/refs/heads/main/terminal.json")
    .then((response) => response.json())
    .then((data) => {
      
      const terminalFromState = location.state?.selectedTerminal;

      if (terminalFromState) {
        setSelectedTerminal(terminalFromState);
      } else if (data.data.length > 0) {
        setSelectedTerminal(data.data[0]);
      }
    })
    .catch((error) => console.error("Error fetching data:",error));
  },[location.state])

  return (
    <>
        <Navbar/>
        <div className="main-container">
          <TerminalList
            onSelect={setSelectedTerminal}
            selectedId={selectedTerminal?.id}
          />
          <TerminalDetail terminal={selectedTerminal} />
        </div>
        <Footer />
        
    </>
  )
}

export default TerminalPage