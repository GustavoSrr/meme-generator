import React, { FormEvent, useContext, useState } from 'react'
import { memeContext } from '../../contexts/meme'

import { Button } from '../Button'

import { FaRegSave } from 'react-icons/fa'
import { HexColorPicker } from 'react-colorful'

import { Container, ButtonDiv, ColorPickerDiv } from './styles'

export const Input: React.FC = () => {
  const { meme, setMeme, createMeme } = useContext(memeContext)
  const { imageUrl } = createMeme()

  const [url, setUrl] = useState(meme?.url)
  const [topText, setTopText] = useState(meme?.topText)
  const [bottomText, setBottomText] = useState(meme?.bottomText)
  const [textColor, setTextColor] = useState(meme!.textColor)

  function handleOnSubmitForm (event: FormEvent) {
    event.preventDefault()

    if (!url || !topText || !bottomText) return

    setMeme({
      url,
      topText,
      bottomText,
      textColor
    })
  }

  return (
    <>
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
          <ButtonDiv>
            <Button
              type="submit"
              id="SendButton"
            >
              Enviar
            </Button>
            <a href={imageUrl} download="meme.png">
              <Button
                type="button"
                title="Baixar"
                id="DownloadButton"
              >
                <FaRegSave size={15} />
              </Button>
            </a>
          </ButtonDiv>
        </form>
      </Container>
      <ColorPickerDiv>
        <HexColorPicker color={textColor} onChange={setTextColor} />
      </ColorPickerDiv>
    </>
  )
}
