
import {VscDebugBreakpointLog} from 'react-icons/vsc'
const Instruct = () => {
    return(
        <div class="instructions">
            <p> <span><VscDebugBreakpointLog></VscDebugBreakpointLog></span> The timer runs for 15 seconds </p>
           <p>  <span><VscDebugBreakpointLog></VscDebugBreakpointLog></span> There is one treasure out of 1 - 48 </p>
            <p><span><VscDebugBreakpointLog></VscDebugBreakpointLog></span> You need to select 6 unique numbers </p>
            <p><span><VscDebugBreakpointLog></VscDebugBreakpointLog></span> If you select less than 6 numbers , I'll select the rest from my side </p>
            <p><span><VscDebugBreakpointLog></VscDebugBreakpointLog></span> If the treasure is found in the numbers you selected , then you won else you lost</p>
        </div>
    )
}
export default Instruct