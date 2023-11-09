import s from './style.module.css'
import { EnnemiSection } from './EnnemiSection/EnnemiSection'
import { CharacterSection } from './CharacterSection/CharacterSection'
import { Header } from '../../Header/Header'
import { useState } from 'react'
import { useEffect } from 'react'
import { MONSTERS } from './constant'

export function FightStage({stageNbr, charSelected, attackUserHp}) {

    const [ennemiesList, setEnnemiesList] = useState(MONSTERS)

    const [selectedEnnemy, setSelectedEnnemy] = useState(null)

    const [isFinished, setIsFinished] = useState(false)


    function updateSelectedEnnemy(ennemy) {
        if(ennemy === selectedEnnemy) {
            setSelectedEnnemy(null)
        }
        else {
            setSelectedEnnemy(ennemy)
        }
    }

    function attackEnnemySelected(attackValue) {

        if (selectedEnnemy) {

            const found = ennemiesList.find((element) => element == selectedEnnemy);
            if(found) {
                if( found.hp - attackValue <= 0) {

                    found.hp = 0;
                    found.attack = 0;

                    if(ennemiesList.every((element, index, array) => element.hp === 0)) {
                        setIsFinished(true);
                    }
                    else {
                        tourEnnemis();
                    }
                }
                else {
                    found.hp = found.hp - attackValue;
                    tourEnnemis();
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

    function tourEnnemis() {
        // DGT = cumul des attack des monstres 
        const totalDgt = ennemiesList.reduce((acc, objet) => acc + objet.attack, 0);
        attackUserHp(totalDgt)
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
                {isFinished && <p>FINISHED</p>}
                <CharacterSection 
                    attackEnnemy={attackEnnemySelected} 
                    selectedEnnemy={selectedEnnemy} 
                    charSelected={charSelected} 
                />
            </div>
        </>
    )
        
}