
const Numbers = ({ numbers , treasure}) => {

    console.log(numbers)
    console.log(treasure)
    
       return (
   
           <div class="boxes">
   
               <div class="numbers">
                   <p>The Selected Numbers Are</p>
                   <div class="nums">
                       {numbers.map((e, index) => <div class="chip selected">{e}</div>)}
                   </div>
               </div>
               {treasure.length === 5 && <div class="treasures">
                   <p>The Treasure Numbers Are</p>
                   <div class="nums">
                       {treasure.map((e, index) => <div class="chip selected">{e}</div>)}
                   </div>
               </div>}
   
           </div>
       )
   }

   export default Numbers