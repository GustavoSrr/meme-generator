import React, { useContext, useEffect, useState } from 'react'
import { memeContext } from '../../contexts/meme'

import { createCanvas } from 'canvas'

import { Container } from './styles'

export const MemeImage: React.FC = () => {
  const { meme } = useContext(memeContext)
  const [imgUrl, setImgUrl] = useState('')

  useEffect(() => {
    const image = new Image()

    const imageElement = document.getElementById('memeImg')

    if (imageElement && meme) {
      image.src = meme.url

      image.crossOrigin = 'anonymous'

      imageElement.style.width = `${image.width}px`
      imageElement.style.height = `${image.height}px`

      const canvas = createCanvas(image.width, image.height)
      const ctx = canvas.getContext('2d')

      ctx.fillRect(0, 0, image.width, image.height)

      image.onload = function () {
        ctx.drawImage(image, 0, 0, image.width, image.height)

        ctx.font = '25px Anton'
        ctx.textAlign = 'center'
        ctx.fillStyle = 'white'

        ctx.fillText(meme.topText.toUpperCase(),
          Math.round(image.width / 2),
          30
        )

        ctx.fillText(meme.bottomText.toUpperCase(),
          Math.round(image.width / 2),
          image.height - 10
        )

        setImgUrl(canvas.toDataURL())
      }
    }
  }, [0, meme])

  return (
    <Container>
      <img src={imgUrl} alt="img" id="memeImg"/>
    </Container>
  )
}
