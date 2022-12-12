import styled from 'styled-components'

const ProfileStyled = styled.div`
  grid-area: profile;

  .avatar {
    box-sizing: border-box;
    margin-block-end: var(--space-3);
    border: 1px solid var(--grey-2);
    border-radius: 50%;
    overflow: hidden;
  }

  .name {
    margin: 0;
    margin-block-end: var(--space);
    font: var(--headline1);
    color: var(--white);
  }
  
  .username {
    margin-block-start: var(--space);
    margin-block-end: var(--space-3);
    font: var(--headline2-ligth);
  }

  .info {
    display: flex;
    align-items: center;
    gap: var(--space);
    margin-block: var(--space-2);
    font: var(--body2-semi-bold);
    color: var(--grey);
    text-decoration: none;
  }

  .buttons {
    display: flex;
    gap: var(--space);
    margin-block: var(--space-3);
  }

  a:hover {
    text-decoration: underline;
  }
`

function Profile() {
  return (
    <ProfileStyled>
      <img className='avatar' width='278' height='278' src='' alt='' />
      <p className='name'>Felipe Merchan</p>
      <p className='username'>FelipeMerchan</p>
      <div className='buttons'>
        <button>Follow</button>
        <button>Sponsor</button>
      </div>
      <p className='bio info'>
        Hi
      </p>
      <p className='followers info'>
        * 10 <span>followers</span> <span>*</span> 15 <span>following</span>
      </p>
      <p className='stars info'>
        * 81
      </p>
      <p className='location info'>
        * Bogota
      </p>
      <a
        className='info'
        href='https://felipemerchan.com'
        target='_blank'
        rel='noreferrer'
      >
        @FelipeMerchan
      </a>
      <a
        className='info'
        href='https://felipemerchan.com'
        target='_blank'
        rel='noreferrer'
      >
        https://felipemerchan.com
      </a>
    </ProfileStyled>
  )
}

export default Profile
