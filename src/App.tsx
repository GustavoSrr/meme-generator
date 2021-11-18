import React from 'react'

import { Header } from './components/Header'
import { MemeImage } from './components/MemeImage'
import { Input } from './components/Input'

import { UrlProvider } from './contexts/url'

export const App: React.FC = () => {
  return (
    <UrlProvider>
      <div className="App">
        <Header />
        <MemeImage />
        <Input />
      </div>
    </UrlProvider>
  )
}
