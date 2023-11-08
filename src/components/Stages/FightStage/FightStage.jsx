import s from './style.module.css'
import { EnnemiSection } from './EnnemiSection/EnnemiSection'
import { CharacterSection } from './CharacterSection/CharacterSection'
import { Header } from '../../Header/Header'
import { useState } from 'react'
import { useEffect } from 'react'
import { MONSTERS } from './constant'

export function FightStage({stageNbr, charSelected}) {

    const [ennemiesList, setEnnemiesList] = useState(MONSTERS)

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

        if (selectedEnnemy) {

            const found = ennemiesList.find((element) => element == selectedEnnemy);
            if(found) {
                if( found.hp-charSelected.attack <= 0) {
                    // DEDGE: on retire
                    found.hp = 0
                }
                else {
                    found.hp = found.hp-charSelected.attack;
                }
            }
            setEnnemiesList((prevUsersList) => {
                return prevUsersList.map((monster) => {
                    if (monster === selectedEnnemy) {
                      return found;
                    }
                    return monster;
                  });
            })
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