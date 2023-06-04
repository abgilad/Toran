import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal'

Modal.setAppElement('#root');


export default function Main({ data, setTempClient, tempClient, currentNum, appointment }) {

    const [isOpen, setIsOpen] = useState(false);
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
    const [clickCount, setClickCount] = useState(0); //proverka skolko zifr v diplee.




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

    console.log(currentNum)
    console.log(num)

    const checkClient = () => {

        const ifHaveNum = appointment.find((val) => val.id === num)

        console.log(ifHaveNum)

        if (ifHaveNum) {
            modalNum()
        }
        else if (num.length == 9) {
            const client = data.find((val) => val.id == num);


            if (client) {
                setTempClient(client)
                nav('/menu')
            }
            else {
                let temp = {
                    clientName: '',
                    id: num
                };
                setTempClient(temp);
                nav('/pratit')
            }
        }
        else alert('enter 9 digits')

    }

    const modalNum = () => {

        setIsOpen(true);
        setTimeout(() => {
            setIsOpen(false);
        }, 3000); setNum(''); setClickCount(0)
    }

    return (
        <div className='main'>
            <Modal isOpen={isOpen}>
                <h5>{currentNum.name}</h5><br />
                <h1>{currentNum.num}</h1>
            </Modal>
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
