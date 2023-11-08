import s from './style.module.css'
import { EnnemiSection } from './EnnemiSection/EnnemiSection'
import { CharacterSection } from './CharacterSection/CharacterSection'
import { Header } from '../../Header/Header'
import { useState } from 'react'
import { useEffect } from 'react'
import { MONSTERS } from './constant'

export function FightStage({stageNbr, charSelected}) {

    const [selectedEnnemy, setSelectedEnnemy] = useState(null)

    const [ennemiesList, setEnnemiesList] = useState(MONSTERS)

    console.log({ennemiesList})

    // useEffect(() => {
    //     setEnnemiesList(MONSTERS)
    // }, [])


    function updateSelectedEnnemy(ennemy) {
        if(ennemy === selectedEnnemy) {
            setSelectedEnnemy(null)
        }
        else {
            setSelectedEnnemy(ennemy)
        }
    }

    function attackEnnemySelected() {
        if (selectedEnnemy) {
            const updatedEnnemy = { ...selectedEnnemy, hp: selectedEnnemy.hp - charSelected.attack };
            setSelectedEnnemy(updatedEnnemy);
            console.log("hp selected enemy: " + updatedEnnemy.hp);
            setEnnemiesList([])
        }

    }


    return (
        <>
            <Header pageTitle={`Rêve N°${stageNbr}: Combat`} />
            
            <div>
                <EnnemiSection 
                    selectedEnnemy={selectedEnnemy} 
                    onSelectEnnemy={updateSelectedEnnemy} 
                    stageNbr={stageNbr} 
                    ennemiesList={ennemiesList}
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