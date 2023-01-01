import styled from 'styled-components'
import EmptyState from './empty-state'
import RepoItem from './repo-item'

const RepoListStyled = styled.div`
  grid-area: repo-list;
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
`

function RepoList({ filterByLanguage, search, repoList }) {
  let list = repoList

  if (search !== '') {
    list = list.filter(repo => {
      return repo.name.search(search) >= 0
    })
  }

  if (filterByLanguage !== '') {
    list = list.filter(repo => {
      return repo.language === filterByLanguage
    })
  }

  return (
    <RepoListStyled>
      {list.map((repo) => {
        return <RepoItem {...repo} key={repo.id} />
      })}
      {
        list.length === 0 ? <EmptyState /> : null
      }
    </RepoListStyled>
  )
}

export default RepoList
