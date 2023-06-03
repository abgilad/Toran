import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Logo({ setTempClient }) {

    const nav = useNavigate()

    return (
        <div>
            <button onClick={() => { setTempClient(''); nav('/') }}>HOME</button>
        </div>
    )
}
