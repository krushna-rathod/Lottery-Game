import { useState } from "react"
import "./Lottery.css"
import { getTicket ,sum} from "./helper"
import Ticket from "./Ticket"

export default function Lottery({n=3,winningSum=15}){
    let [ticket,setTicket]=useState(getTicket(n))
  
   let isWinning=sum(ticket)===winningSum;
   
    //  let isWinning = ticket.every((num) => num === ticket[0]);

//      let isWinning = (
//   ticket[0] === ticket[1] ||
//   ticket[1] === ticket[2] ||
//   ticket[0] === ticket[2]
// );
    let buyTicket=()=>{
        setTicket(getTicket(n))
    }

     
    return(
        <div>
            
            <h2>Lottery Game!</h2>
            <div className="ticket">
            <Ticket ticket={ticket}/>
            </div>
                
                <button onClick={buyTicket}>Buy a New Ticket</button>
                <br></br>
                {/* <p>Total={sum(ticket)}</p> */}
            <h3>{isWinning && "Congratulation You Won the Ticket!"}</h3>
        </div>
    )
}