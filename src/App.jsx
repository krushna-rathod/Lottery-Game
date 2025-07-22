import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Lottery from './Lottery'
// import TicketNum from './TicketNum.jsx'
import Ticket from "./Ticket.jsx"

function App() {
  
  return (
    <>
      <Lottery n={3} winningSum={15}/>
      {/* <Ticket ticket={[5 ,4, 3]}/> */}
      
    </>
  )
}

export default App
