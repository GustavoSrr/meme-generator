import React from 'react'

import { Header } from './components/Header'
import { MemeImage } from './components/MemeImage'

import { MemeProvider } from './contexts/meme'

export const App: React.FC = () => {
  return (
    <MemeProvider>
      <div className="App">
        <Header />
        <MemeImage />
      </div>
    </MemeProvider>
  )
}
