import React, { FormEvent, useContext, useState } from 'react'
import { memeContext } from '../../contexts/meme'

import { Button } from '../Button'
import { Container } from './styles'

export const Input: React.FC = () => {
  const { meme, setMeme } = useContext(memeContext)

  const [url, setUrl] = useState(meme?.url)
  const [topText, setTopText] = useState(meme?.topText)
  const [bottomText, setBottomText] = useState(meme?.bottomText)

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
          value={url}
        />
        <input
          type="text"
          required
          placeholder="Texto de cima"
          onChange={event => setTopText(event.target.value)}
          value={topText}
        />
        <input
          type="text"
          required
          placeholder="Texto de baixo"
          onChange={event => setBottomText(event.target.value)}
          value={bottomText}
        />
        <Button>Enviar</Button>
      </form>
    </Container>
  )
}
