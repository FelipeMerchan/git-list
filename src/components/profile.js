import { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components'

import props from '../profile-data'
import Button from './button'
import Icon from './icon'

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
  const {
    avatar_url,
    bio,
    blog,
    followers,
    following,
    location,
    login,
    name,
    twitter_username,
  } = props
  const [coolName, setCoolName] = useState(name)
  useEffect(() => {
    setCoolName('Felipe')
  }, [])
  

  return (
    <ProfileStyled>
      <img
        className='avatar'
        width='278'
        height='278'
        src={avatar_url}
        alt=''
      />
      <p className='name'>{coolName}</p>
      <p className='username'>{login}</p>
      <div className='buttons'>
        <Button
          className='custom'
          text='Follow'
          link='#'
        />
        <Button
          text='Sponsor'
          icon={
            <Icon
              name='heart'
              size={24}
              color='var(--pink)'
            />
          }
        />
      </div>
      <p className='bio info'>
        {bio}
      </p>
      <p className='followers info'>
        * {followers} <span>followers</span> <span>*</span> {following} <span>following</span>
      </p>
      <p className='location info'>
        * {location}
      </p>
      <a
        className='info'
        href={blog}
        target='_blank'
        rel='noreferrer'
      >
        {blog}
      </a>
      <a
        className='info'
        href={`https://twitter.com/${twitter_username}`}
        target='_blank'
        rel='noreferrer'
      >
        @{twitter_username}
      </a>
    </ProfileStyled>
  )
}

export default Profile
