import { useState } from 'react'
import styled from 'styled-components'

import style from './user.module.css'
import './user.scss'

const Avatar = styled.img`
    border: 10px solid black;
`

export const User = ({ counter, name, avatar }) => {
    const [calculatedName, setCalculatedName] = useState(name)

    function onClick() {
        setCalculatedName('Daniel')
    }

    return (
        <div style={{
            borderBottom: '10px solid red',
            borderLeft: '5px solid blue',
        }} className='User' onClick={onClick}>
            <img className={style.avatar} src={avatar} alt={name} title={name} />
            <Avatar src={avatar} alt={name} title={name} />
            <p className='name'>Hemos dado clic en {calculatedName} por {counter} veces</p>
        </div>
    )
}
