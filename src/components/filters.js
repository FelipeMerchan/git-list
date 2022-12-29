import styled from 'styled-components'

import Icon from './icon'
import ModalContent from './modal'

const FiltersStyled = styled.div`
  grid-area: filters;
  background-color: blue;
`

function Filters() {
  return (
    <FiltersStyled>
      Filters
      <ModalContent />
      <Icon name='arrow-down' />
      <Icon name='branch' />
      <Icon name='book' />
      <Icon name='cancel' />
      <Icon name='check' />
      <Icon name='github' />
      <Icon name='heart' />
      <Icon name='home' />
      <Icon name='link' />
      <Icon name='location' />
      <Icon name='search' />
      <Icon name='star' />
      <Icon name='twitter' />
      <Icon name='user' />
    </FiltersStyled>
  )
}

export default Filters
