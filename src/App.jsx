import { useState } from 'react'
import { LandingPage } from './components/LandingPage/LandingPage'
import { SelectChar } from './components/SelectChar/SelectChar'
import { FightStage } from './components/Stages/FightStage/FightStage'
import { ShopStage } from './components/Stages/ShopStage/ShopStage'
import { ITEMS } from './items'
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

  function gainCoins(value) {
    setCharSelected({...charSelected, coins: charSelected.coins + value})
  }

  function inscrStageNbr() {
    setStageNbr(stageNbr + 1)
  }


  // Remplacer par const "content"

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
    if(stageNbr % 3 == 0) {
        return (
          <>
            <ShopStage stageNbr={stageNbr} charSelected={charSelected} itemsList={ITEMS} />
          </>
        )
    }
    else {
      return (
        <>
          <FightStage 
            stageNbr={stageNbr} 
            charSelected={charSelected} 
            attackUserHp={attackUserHp} 
            inscrStageNbr={inscrStageNbr} 
            gainCoins={gainCoins}
          />
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
