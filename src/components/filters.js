import { useState } from 'react'
import styled from 'styled-components'

import InputText from './input-text'
import Selector from './selector'
import Separator from './separator'

const FiltersStyled = styled.div`
  grid-area: filters;

  .count {
    display: none;

    @media screen and (min-width: 1024px) {
      display: block;
      margin: 0;
      margin-block-end: var(--space-3); 
      font: var(--headline2-semi-bold);
      color: var(--title-color);
    }
  }

  .action-list {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);

    @media screen and (min-width: 1024px) {
      flex-direction: initial;
      gap: var(--space-2);
    }
  }

  .select-list {
    display: flex;
    gap: var(--space);
  }
`

function Filters({ allLanguages, repoListCount, setSearch, setFilterByLanguage }) {
  const [languageSelected, setLanguageSelected] = useState('')

  function handleChange(event) {
    setSearch(event.target.value)
  }

  function handleSelect(event) {
    setLanguageSelected(event.target.value)
    setFilterByLanguage(event.target.value)
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
            <option value='tipo' disabled>Tipo</option>
            <option value='all'>all</option>
            <option value='forks'>forks</option>
          </Selector>
          <Selector value={languageSelected} onChange={handleSelect}>
            <option value=''>Lenguaje</option>
            {
              allLanguages.map(language => (
                <option value={language} key={language}>{language}</option>
              ))
            }
          </Selector>
          <Selector>
            <option value='ordenar' disabled>Ordenar</option>
            <option value='stars'>stars</option>
          </Selector>
        </div>
      </div>
      <Separator />
    </FiltersStyled>
  )
}

export default Filters
