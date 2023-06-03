import React from 'react'

export default function Menu({ newNumber, appointment }) {

    const kupa = 'kupa';
    const mashkantaot = 'mashkantaot';
    const pratit = 'pratit';
    const iskit = 'iskit';

    console.log(appointment)

    return (
        <div className='mainMenu'>
            <button onClick={() => { newNumber(kupa) }} className='menuBtns' value={kupa}>קופה</button>
            <button onClick={() => { newNumber(mashkantaot) }} className='menuBtns' value={mashkantaot}>משכנתאות</button>
            <button onClick={() => { newNumber(pratit) }} className='menuBtns' value={pratit}>לקוחות פרטיים</button>
            <button onClick={() => { newNumber(iskit) }} className='menuBtns' value={iskit}>לקוחות עסקיים</button>
        </div>
    )
}
