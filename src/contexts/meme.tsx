import React, { createContext, ReactNode, useState } from 'react'

import { createCanvas } from 'canvas'

type memeStateType = {
  url: string;
  topText: string;
  bottomText: string;
} | null

type memeContextType = {
  meme: memeStateType | null;
  setMeme: React.Dispatch<React.SetStateAction<memeStateType>>;
  createMeme: () => { image: HTMLImageElement; imageUrl: string; };
}

type memeProviderProps = {
  children: ReactNode;
}

export const memeContext = createContext({} as memeContextType)

export function MemeProvider (props: memeProviderProps) {
  const [meme, setMeme] = useState<memeStateType | null>({
    url: 'https://avatars.githubusercontent.com/u/69684623?v=4',
    topText: 'Meme',
    bottomText: 'Generator'
  })

  function createMeme () {
    const [imageUrl, setImageUrl] = useState('')

    const image = new Image()

    if (meme) {
      image.src = meme.url

      image.crossOrigin = 'anonymous'

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

        setImageUrl(canvas.toDataURL())
      }
    }

    return ({
      image: image,
      imageUrl: imageUrl
    })
  }

  return (
    <memeContext.Provider value={{ meme, setMeme, createMeme }}>
      {props.children}
    </memeContext.Provider>
  )
}
