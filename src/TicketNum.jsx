 import "./TicketNum.css"
 


// export default function TicketNum({num}){
//     return
        
//         <span className="TicketNum">{num}</span>
        
       
    
// }
export default function TicketNum({ num }) {
  console.log("Rendering num:", num);  // Debug log
  return (
    <span className="TicketNum">{num}</span>
  );
}
