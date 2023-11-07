import s from './style.module.css'
import { EnnemiSection } from './EnnemiSection/EnnemiSection'
import { CharacterSection } from './CharacterSection/CharacterSection'
import { Header } from '../../Header/Header'
import { useState } from 'react'

export function FightStage({stageNbr, charSelected}) {

    const [selectedEnnemy, setSelectedEnnemy] = useState(null)

    function updateSelectedEnnemy(ennemy) {
        setSelectedEnnemy(ennemy)
    }

    console.log(selectedEnnemy)

    return (
        <>
            <Header pageTitle={`Rêve N°${stageNbr}: Combat`} />
            <div>
                <EnnemiSection selectedEnnemy={selectedEnnemy} onSelectEnnemy={updateSelectedEnnemy} stageNbr={stageNbr} />
                <CharacterSection charSelected={charSelected} />
            </div>
        </>
    )
}