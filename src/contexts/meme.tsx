import React, { createContext, ReactNode, useState } from 'react'

type memeStateType = {
  url: string;
  topText: string;
  bottomText: string;
} | null

type memeContextType = {
  meme: memeStateType | null;
  setMeme: React.Dispatch<React.SetStateAction<memeStateType>>;
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

  return (
    <memeContext.Provider value={{ meme, setMeme }}>
      {props.children}
    </memeContext.Provider>
  )
}
