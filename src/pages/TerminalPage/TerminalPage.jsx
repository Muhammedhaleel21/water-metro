import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import TerminalDetail from '../../components/Terminals/TerminalDetail';
import TerminalListPage from '../../components/Terminals/TerminalListPage'
import Footer from '../../components/Footer/Footer';
import './TerminalPage.css'
import { useLocation } from 'react-router-dom';

function TerminalPage() {

  const [terminals, setTerminals] = useState([]);
  const [selectedTerminal, setSelectedTerminal] = useState(null)
  const location = useLocation();

  useEffect(() =>{
    fetch("https://raw.githubusercontent.com/e3ob/wm-test/refs/heads/main/terminal.json")
    .then((response) => response.json())
    .then((data) => {
      setTerminals(data.data);

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
          <TerminalListPage
            terminals={terminals}
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