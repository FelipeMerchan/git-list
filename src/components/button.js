import { isValidElement } from 'react'
import styled from 'styled-components'

const ButtonStyled = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space);
  min-inline-size: 135px;
  border: 1px solid var(--grey);
  padding-block: var(--space-smaller);
  font: var(--button);
  text-decoration: none !important;
  color: var(--button-text);
  border-radius: var(--border-radius);
  background-color: var(--button-bg);
  cursor: pointer;

  &:hover {
    color: var(--button-bg);
    background-color: var(--white);
  }
`

function Button({ text, link, className, icon }) {
  const component = link ? 'a' : 'button'
  let IconComponent = null

  if (icon) {
    if (isValidElement(icon)) {
      IconComponent = icon
    }
  }

  return (
    <ButtonStyled
      className={className}
      as={component}
      href={link}
    >
      {IconComponent}
      {text}
    </ButtonStyled>
  )
}

export const ButtonContrast = styled(Button)`
  color: var(--button-bg);
  background: var(--white);

  &:hover {
    color: var(--button-text);
    background: var(--button-bg);
  }
`

export const ButtonRounded = styled(Button)`
  border: 1px solid var(--grey);
  min-inline-size: initial;
  padding: .75rem;
  border-radius: 50%;

  &:hover {
    background: var(--button-bg);
    transform: scale(1.1);
  }
`

export default Button
