import { useState } from 'react'
import { LandingPage } from './components/LandingPage/LandingPage'
import { SelectChar } from './components/SelectChar/SelectChar'
import { FightStage } from './components/Stages/FightStage/FightStage'
import { ShopStage } from './components/Stages/ShopStage/ShopStage'
import { ITEMS, CONSOMMABLES } from './items'
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

  function addItem(item) {

    // Vérif si assez de sous
    if (charSelected.coins - item.price >= 0) {
      setCharSelected({
        ...charSelected,
        inventory: [...charSelected.inventory, item],
        coins: charSelected.coins - item.price,
      });  
    }
    else {
      alert('pas assez de sous !')
    }

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
            <ShopStage 
              stageNbr={stageNbr} 
              charSelected={charSelected} 
              // Générer le tableau mixant ITEMS et CONSOMMABLES (en fonction du stage, 3items/2conso etc)
              itemsList={ITEMS} 
              consoList={CONSOMMABLES}
              addItem={addItem} 
              inscrStageNbr={inscrStageNbr} />
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
