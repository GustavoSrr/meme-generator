import React, { createContext, ReactNode, useState } from 'react'

type urlContextType = {
  url: string;
  setUrl: React.Dispatch<React.SetStateAction<string>>;
}

type urlProviderProps = {
  children: ReactNode;
}

export const urlContext = createContext({} as urlContextType)

export function UrlProvider (props: urlProviderProps) {
  const [url, setUrl] = useState('')

  return (
    <urlContext.Provider value={{ url, setUrl }}>
      {props.children}
    </urlContext.Provider>
  )
}
