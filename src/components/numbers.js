import Treasure from "./treasure"
const Numbers = ({ numbers, select, setNumbers }) => {

   
       return (
   
           <>
   
               <div class="numbers">
                   <p>The Selected Numbers Are</p>
                   <div class="nums">
                       {numbers.map((e, index) => <div class="chip selected">{e}</div>)}
                   </div>
               </div>
               {!select && <Treasure numbers={numbers}></Treasure>}
   
           </>
       )
   }

   export default Numbers