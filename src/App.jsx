import { useState } from 'react'
import { LandingPage } from './components/LandingPage/LandingPage'
import { SelectChar } from './components/SelectChar/SelectChar'
import { FightStage } from './components/Stages/FightStage/FightStage'

function App() {
  
  const [isLandingPage, setIsLandingPage] = useState(true)

  const [isCharSelected, setIsCharSelected] = useState(false)
  const [charSelected, setCharSelected] = useState("")

  const [stageNbr, setStageNbr] = useState(1)

  function launchGame() {
    setIsLandingPage(false)
  }

  function selectChar(character) {
    setIsCharSelected(true)
    setCharSelected(character)
  }

  function attackUserHp(value) {
    setCharSelected({...charSelected, hp: charSelected.hp - value})
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
        <FightStage stageNbr={stageNbr} charSelected={charSelected} attackUserHp={attackUserHp} />
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
