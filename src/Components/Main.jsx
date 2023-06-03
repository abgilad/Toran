import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';




export default function Main({ modalNum, data, setTempClient, tempClient }) {


    const nav = useNavigate()

    const nums = () => {
        let numbers = [];
        for (let i = 1; i < 11; i++) {
            if (i == 10) {
                numbers.push(0)
            }

            else numbers.push(i)
        }
        return numbers
    }

    const [num, setNum] = useState('')
    const [clickCount, setClickCount] = useState(0);




    const addNum = (n) => {
        if (clickCount >= 9) {
            return;
        }
        setNum(num + n)
        setClickCount(clickCount + 1)
    }

    const viewNums = () => {
        return nums().map((val, i) => {
            return <button className='btn' key={i} onClick={() => { addNum(val) }}>{val}</button>
        })
    }

    console.log(tempClient.id)
    console.log(num)

    const checkClient = () => {
        if (tempClient.id === num) {

        }
        else if (num.length == 9) {
            const client = data.find((val) => val.id == num);
            debugger
            if (tempClient.id === num) {
                nav('/')
                // modalNum()

            }
            else if (client) {
                setTempClient(client)
                nav('/menu')
            }
            else nav('/pratit')
        }
        else alert('enter 9 digits')

    }

    return (
        <div className='main'>

            <div className='display'>{num}</div>
            <div className='numbers'>
                {viewNums()}
            </div>
            <div>
                <button onClick={() => { setNum(''); setClickCount(0) }} className='acceptBtns'>מחק</button>
                <button onClick={checkClient} className='acceptBtns'>אישור</button>
            </div>
        </div>
    );
}
