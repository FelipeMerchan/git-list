import styled from 'styled-components'

const SelectorStyled = styled.select`
  border: none;
  padding-inline: var(--space-2);
  padding-block: var(--space);
  font: var(--body2-semi-bold);
  color: var(--title-color);
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
