import { useState } from "react"

export const User = ({ counter, name, avatar }) => {
    const [calculatedName, setCalculatedName] = useState(name)

    function onClick() {
        setCalculatedName('Daniel')
    }

    return (
        <div className='User' onClick={onClick}>
            <img src={avatar} alt='' />
            <p>Hemos dado clic en {calculatedName} por {counter} veces</p>
        </div>
    )
}
