import React, { FormEvent, useState } from 'react'

import { Button } from '../Button'
import { Container } from './styles'

export const Input: React.FC = () => {
  const [url, setUrl] = useState('')

  function handleOnSubmitForm (event: FormEvent) {
    event.preventDefault()

    if (!url) return
    console.log(url)
  }

  return (
    <Container>
      <form onSubmit={event => handleOnSubmitForm(event)}>
        <input
          type="text"
          placeholder="Url da imagem"
          onChange={event => setUrl(event.target.value)}
        />
        <Button>Enviar</Button>
      </form>
    </Container>
  )
}
