
import {VscDebugBreakpointLog} from 'react-icons/vsc'
const Instruct = () => {
    return(
        <div class="instructions">
            <p><span><VscDebugBreakpointLog></VscDebugBreakpointLog></span> The timer runs for 15 seconds </p>
            <p> <span><VscDebugBreakpointLog></VscDebugBreakpointLog></span> There are five unique treasures out of 1 - 48 </p>
            <p><span><VscDebugBreakpointLog></VscDebugBreakpointLog></span> You need to select 5 unique numbers </p>
            <p><span><VscDebugBreakpointLog></VscDebugBreakpointLog></span> You will initially have a balance of 1000</p>
            <p><span><VscDebugBreakpointLog></VscDebugBreakpointLog></span> If the treasures match with the numbers you selected , then you will gain [Matched*Bet] or else you will loose your [Bet]</p>
        </div>
    )
}
export default Instruct