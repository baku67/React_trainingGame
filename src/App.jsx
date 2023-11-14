import { useState } from 'react'
import { LandingPage } from './components/LandingPage/LandingPage'
import { SelectChar } from './components/SelectChar/SelectChar'
import { FightStage } from './components/Stages/FightStage/FightStage'
import { ShopStage } from './components/Stages/ShopStage/ShopStage'
import s from './style.module.css'

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

  function inscrStageNbr() {
    setStageNbr(stageNbr + 1)
  }


  // Remplacer par const "content"
  // ajouter condition si stageNumber == mutliple de 3, <ShopStage />

  if(isLandingPage) {
    return (
      <>
        <LandingPage launchGame={launchGame} />
      </>
    )
  }
  // Déroulement des stages
  else if (isCharSelected) {
    // Si stage 5, 10, 15 etc... : <ShopStage />
    // Sinon <FightStage />
    if(stageNbr % 2 == 0) {
        return (
          <>
            <ShopStage stageNbr={stageNbr} charSelected={charSelected} />
          </>
        )
    }
    else {
      return (
        <>
          <FightStage stageNbr={stageNbr} charSelected={charSelected} attackUserHp={attackUserHp} inscrStageNbr={inscrStageNbr} />
        </>
      )
    }
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
