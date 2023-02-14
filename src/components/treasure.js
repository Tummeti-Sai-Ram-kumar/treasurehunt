
import { useState } from 'react';
const num = Math.floor(Math.random() * 48) + 1;
const Treasure = ({ numbers }) => {
    
    const [revealed, setRevealed] = useState(false)
    const reveal = (event) => {

        event.target.style.animation = "rotate 1s forwards linear"
        setTimeout(() => {
            setRevealed(true)
        }, 1500);
    }
    return (
        <>
            <div class="treasure">
                <p class="box title" onClick={reveal}>Reveal Treasure ???</p>
                <p class="box value"><span>{num}</span></p>
            </div>
            {revealed && <p class="results">{numbers.includes(num) ? "Heyy !! you won " : "Alas !! you lost "} <button to="/" class="try" onClick={() => window.location.reload()}>Try again .. ??</button></p>}
        </>
    )
}

export default Treasure