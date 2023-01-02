import styled from 'styled-components'

import Button from './button'
import Icon from './icon'

const ProfileStyled = styled.div`
  grid-area: profile;
  display: grid;
  grid-template-areas: "user-data" "user-metadata" "actions";
  gap: var(--space-3);
  margin-block-end: var(--space-5);

  @media screen and (min-width: 1024px) {
    display: initial;
  }

  .user-info {
    grid-area: user-data;
    display: flex;
    align-items: center;
    gap: var(--space-2);

    @media screen and (min-width: 1024px) {
      display: initial;
    }
  }

  .avatar {
    inline-size: 5rem;
    block-size: 5rem;
    box-sizing: border-box;
    border: 1px solid var(--grey-2);
    border-radius: 50%;
    overflow: hidden;

    @media screen and (min-width: 1024px) {
      inline-size: 100%;
      block-size: auto;
      margin-block-end: var(--space-3);
    }
  }

  .name {
    margin: 0;
    margin-block-end: var(--space);
    font: var(--headline1);
    color: var(--title-color);
  }
  
  .username {
    margin: 0;
    margin-block-start: var(--space);
    font: var(--headline2-ligth);

    @media screen and (min-width: 1024px) {
      margin-block-end: var(--space-3);
    }
  }

  .info {
    display: flex;
    align-items: center;
    gap: var(--space);
    margin-block: var(--space-2);
    font: var(--body2-semi-bold);
    color: var(--grey);
    text-decoration: none;

    &:first-child {
      margin-block-start: 0;
    }

    &:last-child {
      margin-block-end: 0;
    }

    svg {
      path {
        stroke: var(--grey);
      }
    }
  }

  .buttons {
    grid-area: actions;
    display: flex;
    gap: var(--space);
    
    @media screen and (min-width: 1024px) {
      margin-block: var(--space-3);
    }

    & > * {
      flex: 1;
    }
  }

  .user-metadata {
    grid-area: user-metadata;
  }

  a:hover {
    text-decoration: underline;
  }
`

function Profile(props) {
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

  return (
    <ProfileStyled>
      <div className='user-info'>
        <img
          className='avatar'
          width='278'
          height='278'
          src={avatar_url}
          alt={name}
        />
        <div>
          <p className='name'>{name}</p>
          <p className='username'>{login}</p>
        </div>
      </div>
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
      <div className='user-metadata'>
        <p className='bio info'>
          {bio}
        </p>
        <p className='followers info'>
          <Icon name='user' /> {followers} <span>followers</span> <span>*</span> {following} <span>following</span>
        </p>
        <p className='location info'>
          <Icon name='location' /> {location}
        </p>
        <a
          className='info'
          href={blog}
          target='_blank'
          rel='noreferrer'
        >
          <Icon name='link' /> {blog}
        </a>
        <a
          className='info'
          href={`https://twitter.com/${twitter_username}`}
          target='_blank'
          rel='noreferrer'
        >
          <Icon name='twitter' /> @{twitter_username}
        </a>
      </div>
    </ProfileStyled>
  )
}

export default Profile
