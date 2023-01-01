import styled from 'styled-components'

import { ButtonRounded } from './button'
import Icon from './icon'

const SearchStyled = styled.div`
  position: fixed;
  inset-inline-start: var(--space-3);
  inset-block-end: var(--space-3);
`

function Search({ setModal }) {
  function handleClick() {
    setModal(true)
  }

  return (
    <SearchStyled onClick={handleClick}>
      <ButtonRounded className='search-icon' icon={<Icon name='search' size={24} />} />
    </SearchStyled>
  )
}

export default Search
