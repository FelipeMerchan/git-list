import { createGlobalStyle } from 'styled-components'

const GlobalStylesStyled = createGlobalStyle`
  :root {
    --primary: #57a6ff; 
    --white: #fffffe; 
    --black: #141414; 
    --grey: #8b949e; 
    --bg: #0d1117; 
    --button-bg: #22262c; 
    --badge-bg: rgba(56, 139, 253, .15); 
    --button-text: #fffffe;
    --input-text: #fffffe;
    --title-color: #fffffe;
    --grey-2: #c5ced7; 
    --pink: #cc68a0; 
    --yellow: #f1e05a; 
    --purple: #563d7c; 
    --black-2: #171b21;
    --headline1: 600 1.625rem/2rem Inter; 
    --button: 500 0.875rem/1.5rem Inter; 
    --headline2-semi-bold: 600 1.25rem/1.5rem Inter; 
    --headline2-ligth: 300 1.25rem/1.5rem Inter; 
    --body1-regular: 400 1rem/1.5rem Inter; 
    --body1-semi-bold: 700 1rem/1.5rem Inter; 
    --body2-regular: 400 0.875rem/1.5rem Inter; 
    --body2-semi-bold: 600 0.875rem/1.5rem Inter; 
    --caption-regular: 400 0.75rem/1.125rem Inter; 
    --caption-medium: 500 0.75rem/1.125rem Inter; 
    --space-smaller: .25rem;
    --space: .5rem;
    --space-2: 1rem;
    --space-3: 1.5rem;
    --space-4: 2rem;
    --space-5: 2.5rem;
    --border-radius: .5rem;
  }

  body {
    margin: 0;
    font: var(--body1-regular);
    color: var(--grey);
    background-color: var(--bg);
  }

  @media screen and (prefers-color-scheme: light) {
    :root {
      --bg: #fffffe; 
      --button-bg: #fffffe;
      --button-text: #8b949e;
      --input-text: #8b949e;
      --title-color: #15223A;
    }

    .select-list select {
      outline: 1px solid var(--grey);
    }

    .details-item svg path {
      stroke: var(--grey);
    }

    .search-icon svg path {
      fill: var(--grey);
    }
  }
`

export default GlobalStylesStyled
