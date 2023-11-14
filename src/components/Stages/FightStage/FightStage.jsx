import s from './style.module.css'
import { EnnemiSection } from './EnnemiSection/EnnemiSection'
import { CharacterSection } from './CharacterSection/CharacterSection'
import { EnnemiesAttack } from './EnnemiesAttack/EnnemiesAttack'
import { Header } from '../../Header/Header'
import { useState } from 'react'
import { useEffect } from 'react'
import { MONSTERS } from './EnnemiSection/constant'

export function FightStage({stageNbr, charSelected, attackUserHp, inscrStageNbr, gainCoins}) {

    const [ennemiesList, setEnnemiesList] = useState(getRandomMonsters())

    const [selectedEnnemy, setSelectedEnnemy] = useState(null)

    const [isFinished, setIsFinished] = useState(false)

    const [turn, setTurn] = useState("player")

    const [showJauge, setShowJauge] = useState(false)

    const [playerCurrAttack, setPlayerCurrAttack] = useState(0)


    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
      
    function getRandomMonsters() {
        const randomMonsters = [];
        
        for (let i = 0; i < stageNbr; i++) {
            const randomIndex = getRandomInt(0, MONSTERS.length - 1);
            const newMonster = { ...MONSTERS[randomIndex], id: i + 1 };
            randomMonsters.push(newMonster);
        }

        return randomMonsters;
    }



    
    function updateSelectedEnnemy(ennemy) {
        if(ennemy.hp > 0) {
            if(ennemy === selectedEnnemy) {
                setSelectedEnnemy(null)
                setShowJauge(false)
            }
            else {
                setSelectedEnnemy(ennemy)
                // setShowJauge(true)
            }
        }
        else {

        }
    }

    
    function attackEnnemySelected(attackValue) {

        if (selectedEnnemy) {

            const found = ennemiesList.find((element) => element == selectedEnnemy);
            if(found) {

                // Le monstre est tué
                if( found.hp - attackValue <= 0) {

                    found.hp = 0;
                    found.attack = 0;
                    gainCoins(found.coins)

                    // check si tout les monstres morts
                    if(ennemiesList.every((element, index, array) => element.hp === 0)) {
                        setIsFinished(true);
                    }
                    // Sinon tour ennemi
                    else {
                        asyncCallTourEnnemies();
                    }
                }
                // Le monstre est encore vivant, tour ennemi
                else {
                    found.hp = found.hp - attackValue;
                    asyncCallTourEnnemies();
                }
            }
            setPlayerCurrAttack(attackValue)
            // Maj de la liste ennemis:
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

        setSelectedEnnemy(null)
        setShowJauge(false)

        return new Promise((resolve) => {

            setTurn("ennemies")
            // Disable attaque player (ou autre composant a la place)
            setTimeout(() => {
                const totalDgt = ennemiesList.reduce((acc, objet) => acc + objet.attack, 0);
                attackUserHp(totalDgt)
            }, 1000)
            setTimeout(() => {
                setTurn("player")
                resolve("resolved")
            }, 2500);
        })
    }

    async function asyncCallTourEnnemies() {
        console.log("tour ennemies ...")
        const result = await tourEnnemis();
        console.log(result)
        // Expected output : "resolved"
    }


    function newStage() {
        inscrStageNbr()
        setEnnemiesList(getRandomMonsters())
        setTurn("player")
        setShowJauge(false)
        setIsFinished(false)
        setSelectedEnnemy(null)
    }


    return (
        <>

            {isFinished && 
                <>
                    <Header pageTitle={`Rêve N°${stageNbr}: Fini`} />
                    <button onClick={newStage}>Prochain stage</button>
                </>
            }


            {!isFinished && 
            <>
            <Header pageTitle={`Rêve N°${stageNbr}: Combat`} subText={`Tour: ${turn}`} />
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
                        showJauge={showJauge}
                        setShowJauge={setShowJauge}
                        turn={turn}
                    />
                </div>
            </>
        }
        </>
    )
        
}