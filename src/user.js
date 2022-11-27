export const User = ({ name, avatar }) => {
  return (
    <div className='User'>
        <img src={avatar} alt='' />
        <p>{name}</p>
    </div>
  )
}
