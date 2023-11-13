import s from './style.module.css'
import { EnnemiSection } from './EnnemiSection/EnnemiSection'
import { CharacterSection } from './CharacterSection/CharacterSection'
import { EnnemiesAttack } from './ennemiesAttack/EnnemiesAttack'
import { Header } from '../../Header/Header'
import { useState } from 'react'
import { useEffect } from 'react'
import { MONSTERS } from './EnnemiSection/constant'

export function FightStage({stageNbr, charSelected, attackUserHp, inscrStageNbr}) {

    // const [ennemiesList, setEnnemiesList] = useState(MONSTERS)

    // ATTENTION: il faut générer l'id au moment de la génération de l'array 
    const [ennemiesList, setEnnemiesList] = useState(getRandomMonsters())

    const [selectedEnnemy, setSelectedEnnemy] = useState(null)

    const [isFinished, setIsFinished] = useState(false)

    const [turn, setTurn] = useState("player")

    const [playerCurrAttack, setPlayerCurrAttack] = useState(0)


    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
      
    function getRandomMonsters() {
        const randomMonsters = [];
        
        for (let i = 0; i < 3; i++) {
            const randomIndex = getRandomInt(0, MONSTERS.length - 1);
            const newMonster = { ...MONSTERS[randomIndex], id: i + 1 };
            randomMonsters.push(newMonster);
        }

        // console.log("randomMonsters:");
        // console.log(randomMonsters);
        // console.log("MONSTERS:");
        // console.log(MONSTERS);
        
        return randomMonsters;
    }



    
    function updateSelectedEnnemy(ennemy) {
        if(ennemy.hp > 0) {
            if(ennemy === selectedEnnemy) {
                setSelectedEnnemy(null)
            }
            else {
                setSelectedEnnemy(ennemy)
            }
        }
        else {

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
                        asyncCallTourEnnemies();
                    }
                }
                else {
                    found.hp = found.hp - attackValue;
                    asyncCallTourEnnemies();
                }
            }
            setPlayerCurrAttack(attackValue)
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

        return new Promise((resolve) => {

            setTurn("ennemies")
            // Disable attaque player (ou autre composant a la place)
            setTimeout(() => {
                const totalDgt = ennemiesList.reduce((acc, objet) => acc + objet.attack, 0);
                attackUserHp(totalDgt)
                setTurn("player")
                resolve("resolved")
            }, 1500);
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
        // setEnnemiesList(MONSTERS)
        setEnnemiesList(getRandomMonsters())
        setTurn("player")
        setIsFinished(false)
        
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
                    
                    {turn=="player" && 
                        <CharacterSection 
                            attackEnnemy={attackEnnemySelected} 
                            selectedEnnemy={selectedEnnemy} 
                            charSelected={charSelected} 
                        />
                    }
                    {turn=="ennemies" && 
                        <EnnemiesAttack 
                            ennemiesList={ennemiesList} 
                            charSelected={charSelected}
                        />
                    }
                </div>
            </>
        }
        </>
    )
        
}