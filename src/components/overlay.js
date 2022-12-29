import styled from 'styled-components'

const OverlayStyled = styled.div`
  position: fixed;
  inset: 0;
  backdrop-filter: blur(10px);
`

function Overlay({ children }) {
  return (
    <OverlayStyled>
      {children}
    </OverlayStyled>
  )
}

export default Overlay
