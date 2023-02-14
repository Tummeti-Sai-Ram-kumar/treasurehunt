
import {VscDebugBreakpointLog} from 'react-icons/vsc'
const Instruct = () => {
    return(
        <div class="instructions">
            <p><VscDebugBreakpointLog class='icon'></VscDebugBreakpointLog> The timer runs for 15 seconds </p>
            <p><VscDebugBreakpointLog></VscDebugBreakpointLog> There is one treasure out of 1 - 48 numbers</p>
            <p><VscDebugBreakpointLog></VscDebugBreakpointLog> You need to select 6 unique numbers </p>
            <p><VscDebugBreakpointLog></VscDebugBreakpointLog> If you select less than 6 numbers , I'll select the rest from my side </p>
            <p><VscDebugBreakpointLog></VscDebugBreakpointLog> If the treasure is found in the numbers you selected , then you won else you lost</p>
        </div>
    )
}
export default Instruct