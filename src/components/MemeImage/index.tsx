import React, { useContext, useEffect } from 'react'
import { memeContext } from '../../contexts/meme'

import { Input } from '../Input'

import { Container, ItemsDiv } from './styles'

export const MemeImage: React.FC = () => {
  const { createMeme } = useContext(memeContext)

  const { image, imageUrl } = createMeme()

  useEffect(() => {
    const imageElement = document.getElementById('memeImg')

    imageElement!.style.width = `${image.width}px`
  }, [0, image])

  return (
    <Container>
      <img src={imageUrl} alt="img" id="memeImg" draggable={false}/>
      <ItemsDiv>
        <Input />
      </ItemsDiv>
    </Container>
  )
}
