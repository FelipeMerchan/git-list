import styled from 'styled-components'

import InputText from './input-text'
import Selector from './selector'
import Separator from './separator'

const FiltersStyled = styled.div`
  grid-area: filters;

  .count {
    margin: 0;
    margin-block-end: var(--space-3); 
    font: var(--headline2-semi-bold);
    color: var(--white);
  }

  .action-list {
    display: flex;
    gap: var(--space-2);
  }

  .select-list {
    display: flex;
    gap: var(--space);
  }
`

function Filters({ repoListCount, setSearch }) {
  console.log('render')
  function handleChange(event) {
    setSearch(event.target.value)
  }

  return (
    <FiltersStyled>
      <h2 className='count'>
        Repositorios ({repoListCount})
      </h2>
      <div className='action-list'>
        <InputText
          type='search'
          onChange={handleChange}
          placeholder='Busca un repositorio'
        />
        <div className='select-list'>
          <Selector>
            <option value='all'>all</option>
            <option value='forks'>forks</option>
          </Selector>
          <Selector>
            <option value='lenguaje' disabled>lenguaje</option>
            <option value='html'>html</option>
            <option value='css'>css</option>
            <option value='javascript'>javascript</option>
          </Selector>
          <Selector>
            <option value='ordenar' disabled>ordenar</option>
            <option value='stars'>stars</option>
          </Selector>
        </div>
      </div>
      <Separator />
    </FiltersStyled>
  )
}

export default Filters
