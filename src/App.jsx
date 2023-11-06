import { useState } from 'react'
import { LandingPage } from './components/LandingPage/LandingPage'
import { SelectChar } from './components/SelectChar/SelectChar'

function App() {
  
  const [isLandingPage, setIsLandingPage] = useState(true)

  const [isCharSelected, setIsCharSelected] = useState(false)
  const [charSelected, setCharSelected] = useState(null)

  const [stageNbr, setStageNbr] = useState(0)

  function launchGame() {
    setIsLandingPage(false)
  }

  function selectChar(character) {
    setIsCharSelected(true)
    setCharSelected(character)
  }

  console.log(charSelected)

  if(isLandingPage) {
    return (
      <>
        <LandingPage launchGame={launchGame} />
      </>
    )
  }
  else if (isCharSelected) {
    return (
      <>

      </>
    )
    }
  else {
    return (
      <>
        <SelectChar onSelectChar={selectChar} isCharSelected={isCharSelected} />
      </>
    )
  }
  }

export default App
