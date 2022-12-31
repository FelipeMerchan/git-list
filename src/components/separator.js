import styled from 'styled-components'

const SeparatorStyled = styled.div`
  border-block-end: 1px solid var(--grey);
  margin-block: var(--space-3);
`

function Separator() {
  return (
    <SeparatorStyled>
    </SeparatorStyled>
  )
}

export default Separator
