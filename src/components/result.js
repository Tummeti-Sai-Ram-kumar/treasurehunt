import { useEffect } from "react"

const Result = ({count , bet,balance,setBalance }) => {
    const num = (((count*10)/10)*((bet*10)/10)*10)
    console.log("Count is ", count)
    const calculatedBalance = count > 0 ? balance + num : balance;
    useEffect(() => {
        
        if(count > 0 ){

            // flag updated
            console.log("won the bet..." , num);
            console.log(balance)
            console.log(typeof(localStorage.getItem('balance')))
            localStorage.removeItem('balance')
            localStorage.setItem('balance',balance+ num)
            setBalance(balance + num)
            
        }
        else{
            console.log("Lost : ", bet)
            console.log(balance)
            localStorage.removeItem('balance')
            localStorage.setItem('balance',balance)
            
        }
        
    } , [count])
    return(
        <>  
            {count > 0 ? <p>You won {num}</p> : <p>You lost {bet}</p>}
        </>
    )
}
export default Result