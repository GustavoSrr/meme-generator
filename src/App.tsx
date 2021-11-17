import React from 'react'

import { Header } from './components/Header'
import { Meme } from './components/Meme'

export const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Meme />
    </div>
  )
}
