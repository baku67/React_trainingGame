import s from './style.module.css'
import { EnnemiSection } from './EnnemiSection/EnnemiSection'
import { CharacterSection } from './CharacterSection/CharacterSection'
import { Header } from '../../Header/Header'

export function FightStage({stageNbr, charSelected}) {

    return (
        <>
            <Header pageTitle={`Rêve N°${stageNbr}: Combat`} />
            <div>
                <EnnemiSection stageNbr={stageNbr} />
                <CharacterSection charSelected={charSelected} />
            </div>
        </>
    )
}