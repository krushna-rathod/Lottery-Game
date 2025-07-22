import TicketNum from "./TicketNum.jsx";
import "./ticket.css"


export default function Ticket ({ticket}){
    return(
        <div className="Ticket">
           <p className="design">Ticket</p>
             {ticket.map((num,idx)=>(

         <TicketNum num ={num} key ={idx}/>
             ))} 
        </div>
    )
}


