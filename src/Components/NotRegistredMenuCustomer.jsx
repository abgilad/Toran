import React from 'react'

export default function NotRegistredMenuCustomer({ newNumber, appointment }) {




    return (
        <div>
            <button onClick={() => { newNumber('pratit') }} className='menuBtns'>לקוחות פרטיים</button>
        </div>
    )
}
