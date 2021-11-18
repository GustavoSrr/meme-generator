import React, { FormEvent, useContext, useState } from 'react'
import { memeContext } from '../../contexts/meme'

import { Button } from '../Button'
import { Container } from './styles'

export const Input: React.FC = () => {
  const { setMeme } = useContext(memeContext)

  const [url, setUrl] = useState('')
  const [topText, setTopText] = useState('')
  const [bottomText, setBottomText] = useState('')

  function handleOnSubmitForm (event: FormEvent) {
    event.preventDefault()

    if (!url || !topText || !bottomText) return

    setMeme({
      url,
      topText,
      bottomText
    })
  }

  return (
    <Container>
      <form onSubmit={event => handleOnSubmitForm(event)}>
        <input
          type="url"
          required
          placeholder="Url da imagem"
          onChange={event => setUrl(event.target.value)}
        />
        <input
          type="text"
          required
          placeholder="Texto de cima"
          onChange={event => setTopText(event.target.value)}
        />
        <input
          type="text"
          required
          placeholder="Texto de baixo"
          onChange={event => setBottomText(event.target.value)}
        />
        <Button>Enviar</Button>
      </form>
    </Container>
  )
}
