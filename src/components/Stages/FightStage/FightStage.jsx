import s from './style.module.css'
import { EnnemiSection } from './EnnemiSection/EnnemiSection'
import { CharacterSection } from './CharacterSection/CharacterSection'
import { Header } from '../../Header/Header'
import { useState } from 'react'

export function FightStage({stageNbr, charSelected}) {

    const [selectedEnnemy, setSelectedEnnemy] = useState(null)

    function updateSelectedEnnemy(ennemy) {
        if(ennemy === selectedEnnemy) {
            setSelectedEnnemy(null)
        }
        else {
            setSelectedEnnemy(ennemy)
        }
    }

    function attackEnnemySelected() {
        selectedEnnemy.hp = selectedEnnemy.hp - charSelected.attack;
        console.log("hp selected ennemy: " + selectedEnnemy.hp)

    }


    return (
        <>
            <Header pageTitle={`Rêve N°${stageNbr}: Combat`} />
            
            <div>
                <EnnemiSection 
                    selectedEnnemy={selectedEnnemy} 
                    onSelectEnnemy={updateSelectedEnnemy} 
                    stageNbr={stageNbr} 
                />
                <CharacterSection 
                    attackEnnemy={attackEnnemySelected} 
                    selectedEnnemy={selectedEnnemy} 
                    charSelected={charSelected} 
                />
            </div>
        </>
    )
}