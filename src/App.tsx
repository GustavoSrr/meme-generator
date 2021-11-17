import React from 'react'

import { Header } from './components/Header'
import { MemeImage } from './components/MemeImage'

export const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <MemeImage />
    </div>
  )
}
