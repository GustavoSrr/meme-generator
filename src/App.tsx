import React from 'react'

import { Header } from './components/Header'
import { MemeImage } from './components/MemeImage'
import { Input } from './components/Input'

export const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <MemeImage />
      <Input />
    </div>
  )
}
