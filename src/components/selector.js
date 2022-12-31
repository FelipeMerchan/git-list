import styled from 'styled-components'

const SelectorStyled = styled.select`
  border: none;
  padding-inline: var(--space-2);
  color: var(--white);
  background-color: var(--button-bg);
`

function Selector({ children }) {
  return (
    <SelectorStyled>
      {children}
    </SelectorStyled>
  )
}

export default Selector
