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

  // Buffs Stats du perso (pour voir la différence base(+buff) )
  const [buffs, setBuffs] = useState({hp: 0, attack: 0, defense: 0})

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
    setStageNbr((prevStageNbr) => prevStageNbr + 1);
  }

  function addItem(item) {

    // Vérif si assez de sous
    if (charSelected.coins - item.price >= 0) {

      // Ajout item à l'array du charSelected et update des stats
      if(item.type === 'item') {
        setCharSelected({
          ...charSelected,
          inventory: [...charSelected.inventory, item],
          maxHp: charSelected.maxHp + item.buffHp,
          attack: charSelected.attack + item.buffAttack,
          defense: charSelected.defense + item.buffDefense,
          coins: charSelected.coins - item.price,
        }); 

        // Update des buffs (pour afficher la différence de valeur base/buff) 
        setBuffs({
          ...buffs, 
          hp: buffs.hp + item.buffHp,
          attack: buffs.attack + item.buffAttack,
          defense: buffs.defense + item.buffDefense,
        })
      }
      else if (item.type === 'potion') {
        setCharSelected({
          ...charSelected,
          coins: charSelected.coins - item.price,
          hp: charSelected.hp + item.healHp >= charSelected.maxHp ? charSelected.maxHp : charSelected.hp + item.healHp,
        })
      }
      else {
        alert('pas assez de sous !')
      }

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
    if(stageNbr % 4 == 0) {
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
            buffs={buffs}
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
