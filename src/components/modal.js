import React, { useRef } from 'react'
import ReactDOM from 'react-dom'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import { ButtonContrast } from './button'
import InputText from './input-text'
import Overlay from './overlay'

const modalRoot = document.getElementById('portal')


class ModalPortal extends React.Component {
  constructor(props) {
    super(props)
    this.el = document.createElement('div')
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el)
  }

  componentDidMount() {
    modalRoot.appendChild(this.el)
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el)
  }
}

export default function Modal({ isActive, setModal }) {
  if (isActive) {
    return (
      <ModalPortal>
        <ModalContent setModal={setModal} />
      </ModalPortal>
    )
  }

  return null
}

const ModalContentStyled = styled.form`
  position: fixed;
  inset-block-start: 50%;
  inset-inline-start: 50%;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  inline-size: 80%;
  max-inline-size: 24rem;
  padding: var(--space-3);
  color: var(--white);
  transform: translateY(-50%) translatex(-50%);
  background-color: var(--bg);
  border-radius: var(--border-radius);

  .title {
    margin: 0;
    font: var(--headline2-semi-bold);
  }
`

function ModalContent({ setModal }) {
  const form = useRef(null)
  const navigator = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(form.current)
    navigator(`/${formData.get('username')}`)
    setModal(false)
  }


  return (
    <Overlay>
      <ModalContentStyled ref={form} onSubmit={handleSubmit}>
        <h2 className='title'>Busca a tu usuario favorito</h2>
        <InputText type='text' autoComplete='off' name='username' placeholder='Username' />
        <ButtonContrast text='Buscar' />
      </ModalContentStyled>
    </Overlay>
  )
}