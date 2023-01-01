import styled from 'styled-components'

const SelectorStyled = styled.select`
  border: none;
  padding-inline: var(--space-2);
  font: var(--body2-semi-bold);
  color: var(--white);
  background-color: var(--button-bg);
  border-radius: var(--border-radius);
`

function Selector({ children, onChange }) {
  return (
    <SelectorStyled onChange={onChange}>
      {children}
    </SelectorStyled>
  )
}

export default Selector
