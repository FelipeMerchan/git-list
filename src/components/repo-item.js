import styled from 'styled-components'

import Language from './language'

const RepoItemStyled = styled.div`
  display: flex;
  gap: var(--space-2);
  flex-direction: column;
  padding-block: var(--space-2);
  border-block-end: 1px solid var(--grey);

  &:last-child {
    border-block-end: none;
  }

  .title {
    display: flex;
    gap: var(--space-2);
    margin: 0;

    a {
      color: var(--primary);
      text-decoration: none;
    }
  }

  .public {
    border: 1px solid var(--grey);
    padding-inline: var(--space);
    padding-block: .125rem;
    font: var(--caption-regular);
    border-radius: var(--border-radius);
  }

  .description {
    margin: 0;
    font: var(--body2-regular);
  }

  .topicList {
    display: flex;
    gap: var(--space-smaller);
  }

  .topicItem {
    padding-inline: .75rem;
    padding-block: var(--space);
    font: var(--caption-medium);
    color: var(--primary);
    background-color: #15223A;
    border-radius: var(--space-4);
  }
`

function RepoItem(props) {
  return (
    <RepoItemStyled>
      <h3 className='title'>
        <a href={props.html_url}>
          {props.name}
        </a>
        {
          !props.private ? (
            <span className='public'>Public</span>
          ) : null
        }
      </h3>
      {
        props.description ? (
          <p className='description'>
            {props.description}
          </p>
        ) : null
      }
      {
        props.topics.length ? (
          <div className='topicList'>
            {
              props.topics.map(topic => <span className='topicItem'>{topic}</span>)
            }
          </div>
        ) : null
      }
      {
        props.language ? <Language name={props.language} /> : null
      }
    </RepoItemStyled>
  )
}

export default RepoItem
