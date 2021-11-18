import React, { useContext, useEffect, useState } from 'react'
import { memeContext } from '../../contexts/meme'

import { createCanvas, loadImage } from 'canvas'

import img from '../../assets/img.jpg'

import { Container } from './styles'

export const MemeImage: React.FC = () => {
  const { meme } = useContext(memeContext)
  const [imgUrl, setImgUrl] = useState('')

  useEffect(() => {
    console.log(meme)
    const imageElement = document.getElementById('memeImg')

    if (imageElement && meme?.topText && meme?.bottomText && meme.url) {
      const canvas = createCanvas(imageElement.clientWidth, imageElement.clientHeight)
      const ctx = canvas.getContext('2d')

      ctx.fillRect(0, 0, 300, 300)

      loadImage(img).then((image) => {
        ctx.drawImage(image, 0, 0, 300, 300)

        ctx.font = '25px Anton'
        ctx.textAlign = 'center'
        ctx.fillStyle = 'white'

        ctx.fillText(meme.topText.toUpperCase(),
          Math.round(canvas.width / 2),
          30
        )

        ctx.fillText(meme.bottomText.toUpperCase(),
          Math.round(canvas.width / 2),
          290
        )

        setImgUrl(canvas.toDataURL())
      })
    }
  }, [meme])

  return (
    <Container>
      <img src={imgUrl} alt="img" id="memeImg" />
    </Container>
  )
}
