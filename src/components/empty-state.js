import styled from 'styled-components'

const EmptyStateStyled = styled.p`
  margin: 0;
  padding-block: var(--space-5);
  text-align: center;
  font: var(--headline2-semi-bold);
`

function EmptyState() {
  return (
    <EmptyStateStyled>
      No hay repositorios
    </EmptyStateStyled>
  )
}

export default EmptyState
