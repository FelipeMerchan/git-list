export const User = ({ name, avatar }) => {
    function onClick() {
        console.log(`Nombre: ${name}`)
    }

    return (
        <div className='User' onClick={onClick}>
            <img src={avatar} alt='' />
            <p>{name}</p>
        </div>
    )
}
