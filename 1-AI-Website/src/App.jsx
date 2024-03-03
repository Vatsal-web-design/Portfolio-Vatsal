import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import img1 from './img/img1.jpg'
import port1 from './img/port1.png'
import port2 from './img/port2.png'
import port3 from './img/port3.png'
import port4 from './img/port4.png'
import port5 from './img/port5.png'
import port6 from './img/port6.png'
import about from './img/about.png'
import Scroll from './components/Scroll'
function App() {

  return (
    <>
      <Scroll img={img1} port1={port1} port2={port2} port3={port3} port4={port4} port5={port5} port6={port6} about={about} />
    </>
  )
}

export default App
