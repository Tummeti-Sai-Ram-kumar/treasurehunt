import React, { useEffect } from 'react'
import { useState } from 'react'


import './game.css'

import Numbers from './numbers'
import Instruct from './instruct'

const GameBoard = ({ values }) => {
    var [time, setTime] = useState(15)
    const [instruct, setInstruct] = useState(true)
    var [visible, setVisible] = useState(true)
    var [select, setSelect] = useState(false)
    var [numbers, setNumbers] = useState([])
    console.log("numbers global", numbers)
    let startTimer = function () {
        setInstruct(false)
        setVisible(false)
        setSelect(true)
        console.log(select)
        const timer = setInterval(() => {
            if (time > 0) {
                time--;
                setTime(time)
                console.log("Numbers inside Timer ", numbers)
                console.log(time)
            }
            else {

                //  setSelect(false)

                console.log("clr")
                fillRandom(timer)
            }

        }, 1000)





    }

    useEffect(() => {
        if (time === 0) {
            completeRandom()
        }
    }, [time])

    function fillRandom(timer) {
        console.log("Filling")
        //   console.log(dups)

        clearInterval(timer)

        console.log("numbers after timer", numbers)
    }
    // console.log(values)

    function completeRandom() {
        console.log(numbers)
        while (numbers.length < 6) {
            const num = Math.floor(Math.random() * 48) + 1;
            if (!numbers.includes(num)) {
                numbers.push(num)
            }
        }
        console.log(numbers)
        setNumbers(numbers)
    //    setTimeout(() => { setSelect(false) }, 5000)
    setSelect(false)

    }

    return (
        <>
            {instruct && <Instruct></Instruct>}

            {select && <Board values={values} numbers={numbers} setNumbers={setNumbers}></Board>}

            <div class="timer-div">
                {visible && <button onClick={startTimer}>Start Hunt</button>}
                {select && <p class="timer"><span>{time}</span></p>}
            </div>
            {numbers.length > 0 && <Numbers numbers={numbers} select={select} setNumbers={setNumbers} />}
        </>
    )
}





const Board = ({ values, numbers, setNumbers }) => {

    const arr = new Array(49)
    function fun(event) {
        const key = parseInt(event.target.getAttribute("index"))

        //   console.log(key)
        if (numbers.includes(key)) {
            event.target.style.background = "#c6c0a8"
            setNumbers(numbers.filter(((number) => number !== key)))
            console.log(numbers)
        }
        else {

            if (numbers.length > 5) {
                alert("Only 6 Need to be Selected")
            }
            else {
                event.target.style.background = "#749774"
                //    console.log(key)
                arr[key] = true
                //   console.log(arr[key])
                setNumbers([...numbers, (key)])
            }
        }


    }
    return (
        <div class="main-div">
            <div class='board' >
                {values.map((e, index) => <div class={arr[index] ? "chip active" : "chip"} index={index + 1} onClick={(event) => fun(event)} key={index + 1}>{e}</div>)}
            </div>
        </div>
    )
}

export default GameBoard