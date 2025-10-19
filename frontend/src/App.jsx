import { useEffect } from 'react'
import './App.css'
import { pingApi } from './apis/ping'

function App() {

  useEffect(()=>pingApi(), []);

  return (
    <div>Hello</div>
  )
}

export default App
