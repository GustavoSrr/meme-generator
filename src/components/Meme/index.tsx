import React, { useEffect, useState } from 'react'

import { createCanvas, loadImage } from 'canvas'

import { Container } from './styles'
import img from '../../assets/img.jpg'

export const Meme: React.FC = () => {
  const [imgUrl, setImgUrl] = useState('')

  useEffect(() => {
    const imageElement = document.getElementById('memeImg')

    if (imageElement) {
      const canvas = createCanvas(imageElement.clientWidth, imageElement.clientHeight)
      const ctx = canvas.getContext('2d')

      ctx.font = '30px Roboto'
      ctx.textAlign = 'center'
      ctx.fillRect(
        (imageElement.clientWidth - 300) / 2,
        (imageElement.clientHeight - 300) / 2,
        300,
        300
      )

      loadImage(img).then((image) => {
        ctx.drawImage(image, 0, 0, 300, 300)

        setImgUrl(canvas.toDataURL())
      })
    }
  }, [])

  return (
    <Container>
      <img src={imgUrl} alt="img" id="memeImg" />
    </Container>
  )
}
