import { useState, useEffect } from "react";

import { BiEuro } from 'react-icons/bi'

import Result from "./result";

const Board = ({ values, numbers, setNumbers, time, count, setCount, setTime, setTreasure, treasure }) => {
    var coins = [1, 2, 5, 10, 50, 100];

    console.log(count)

    
    const [undo,setUndo] = useState([])
    const [dummy ,setDummy] = useState(0)
    const [bet, setBet] = useState(0)
    const [balance, setBalance] = useState(localStorage.getItem('balance'))
    const [chip, setChip] = useState(1)
    const value = []
    const [startt, setStartt] = useState(false)
    console.log(undo)
    useEffect(() => {
        console.log(chip)

        console.log(undo)
        coins.forEach(element => {
            console.log(element, chip)
            if (element !== parseFloat(chip)) {
                document.getElementById(element + 'c').style.transform = "scale(1.0)"

                document.getElementById(element + 'c').style.border = "none"
            }
            else {
                if(numbers.length > 0){

                    setBet(chip*numbers.length)
                    setBalance(balance + bet - (chip*numbers.length))
                    }
                document.getElementById(element + 'c').style.transform = "scale(1.2)"

                document.getElementById(element + 'c').style.border = "2px solid white"
            }
        });



    }, [chip])


    const arr = new Array(49)
    function fun(event) {
        const key = parseInt(event.target.getAttribute("index"))
        if (numbers.includes(key)) {

            event.target.style.background = "#c6c0a8"
         //   event.target.prop = 0;
            setUndo([...undo , {0: event,1:"deselect"}])
            setNumbers(numbers.filter(((number) => number !== key)))
            setBet((bet * 10 - chip * 10) / 10)
            setBalance((balance * 10 + chip * 10) / 10)
            console.log(numbers)
        }
        else {

            if (numbers.length > 4) {
                alert("Only 5 Need to be Selected")
            }
            else {
                console.log(chip)
                setUndo([...undo , {0: event,1:"select"}])
                event.target.style.background = "#749774"
              //  event.target.prop = 1;
                setBet((bet * 10 + chip * 10) / 10)
                setBalance((balance * 10 - chip * 10) / 10)
                arr[key] = true
                setNumbers([...numbers, (key)])
            }
        }


    }

    function highlight(event) {
        console.log(event)
        console.log("Changing")
        setChip(event.target.getAttribute("index"))
        setDummy(dummy + 1)
        setUndo([...undo , {0:event , 1:event.target.getAttribute("index")}])
    }

    console.log(time)
    

    const generateTreasure = () => {
        console.log(treasure)
        console.log(numbers)
        //   value.push(10)
        while (value.length < 5) {
            const num = Math.floor(Math.random() * 48) + 1;

            if (!value.includes(num)) {
                document.getElementById(num).style.background = '#FFD700'
                value.push(num)
                if (numbers.includes(num)) {
                    console.log("VValue Found")
                    setCount(() => count+1)
                    document.getElementById(num).style.background = '#FFA500'
                }
            }


            console.log(num)

            //  setTreasure([...treasure , num])
        }



        setTreasure(value)
    }

    useEffect(() => {
        
        if (time === 0) {
            //  generateRandom()

            generateTreasure()
        }
    }, [time])



    console.log(treasure)

    function start() {
        console.log("Starting")
        setStartt(true)
        const timer = setInterval(() => {
            if (time >= 0) {
                setTime(time)
                time--;
            }
            else {
                clearInterval(timer)
            }
        }, 1000)

    }
    function newGame() {
        console.log("New Game")
        setBalance(localStorage.getItem('balance'))
        setBet(0)
        setNumbers([])
        setTreasure([])
        setChip(1)
        setUndo([])
        setTime(15)
        setStartt(false)
        setCount(0)

        for (let i = 1; i <= 48; i++)
            document.getElementById(i).style.background = '#c6c0a8'
    }
    function restore(){

        treasure.map((e) => {
            if(numbers.includes(e))
            document.getElementById(e).style.background = "#749774"
            else
            document.getElementById(e).style.background = '#c6c0a8'
        })
        setCount(0)
        setBalance(localStorage.getItem('balance') - bet)
        setTreasure([])
        setTime(15)
        setStartt(false)
    }
    function undoo(){
        if(dummy === 1){
            console.log("Setting Chio to 1")
            setChip(1)
            undo.pop()
            setDummy(dummy - 1)
        }
        else{
            console.log(undo)
            let x = undo.pop()
            console.log("Prop" , x)
            
            if(x[1] === "deselect"){
                x[0].target.style.background = "#749774"
                setNumbers([...numbers , parseInt(x[0].target.getAttribute("index"))])   
                setBalance(balance - chip)
                setBet(bet + chip)
            }
            else if(x[1] === "select"){
                x[0].target.style.background = "#c6c0a8"
                setNumbers(numbers.filter((e) => e !== parseInt(x[0].target.getAttribute("index"))))
                setBalance(balance + chip)
                setBet(bet - chip)
            }
            else{
                console.log("Dy" , dummy)
                let [y] = undo.slice(-1)
                console.log(y)
                setDummy(dummy - 1)
                setChip(parseInt(y[1]))
            }
        }
        
        
        
        console.log(numbers)
        setUndo(undo)
    }

    return (
        <div class="main-div">
            <div class={time > 0 && startt ? 'board' : 'board disable'} >
                {values.map((e, index) => <div id={index + 1} class={arr[index] ? "chip" : "chip"} index={index + 1} onClick={(event) => fun(event)} key={index + 1}>{e}</div>)}
            </div>
            <div class='component'>
                <div className={time > 0 && startt ? "bets" : "bets disable"}>
                    <ul class="bets-list">
                        {coins.map((e, index) => <li id={e + 'c'} index={e} onClick={(event) => highlight(event)} >{e}</li>)}
                    </ul>
                </div>
                <div class="details">
                    <div class='balance'>
                        <p>Balance</p>
                        <p><span><BiEuro class='icon' /></span>{balance}</p>
                    </div>
                    <div class='bet'>
                        <p>Bet Placed</p>
                        <p><span><BiEuro class='icon' /></span>{bet}</p>
                    </div>
                    <div class='elements'>
                        {time !== 0 && <p>Result</p>}
                        {time === 0 && <Result count={count} bet={bet} balance={balance} setBalance={setBalance} ></Result>}
                    </div>
                </div>
                <div class="history">
                    <h3>Result</h3>
                    <div class='elements'>
                        {!startt && <p>Please click on Start button</p>}
                        {time === 0 && <Result count={count} bet={bet} balance={balance} setBalance={setBalance} ></Result>}
                    </div>
                </div>
                <div class='buttons'>
                    <button disabled={startt ? true : false} onClick={start}>Start</button>
                    <button disabled={undo.length === 0 || time <= 0? true : false} onClick={undoo}>Undo</button>
                    <button onClick={newGame}>New</button>
                    <button onClick={restore} disabled={time !== 0 ? true : false}>Restore</button>
                </div>
            </div>
        </div>
    )
}


export default Board