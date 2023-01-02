import styled from 'styled-components'

const LayoutStyled = styled.main`
  min-block-size: 100vh;
  max-inline-size: 75rem;
  margin: auto;
  padding-inline: var(--space-3);
  padding-block: var(--space-3) var(--space-5);
  
  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 278px 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas: "profile filters" "profile repo-list";
    column-gap: 2rem;
    padding-block: var(--space-5);
  }
`

function Layout({ children }) {
  return (
    <LayoutStyled>
      {children}
    </LayoutStyled>
  )
}

export default Layout
