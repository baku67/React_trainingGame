import s from './style.module.css'
import { JaugeAttack } from '../JaugeAttack/JaugeAttack'
import { useState } from 'react'

export function CharacterSection({charSelected, selectedEnnemy, attackEnnemy}) {

    const [showJauge, setShowJauge] = useState(false)

    return (
        <div className={s.container}>
            <p>{charSelected.name}</p>
            <p>{charSelected.description}</p>
            <p><i className={`fa-solid fa-heart ${s.heart}`}></i> {charSelected.hp}</p>
            <p><i className="fa-solid fa-burst"></i> {charSelected.attack}</p>

            {/* <button onClick={() => attackEnnemy(charSelected.attack)} disabled={selectedEnnemy ? false : true}>Attack</button> */}
            {!showJauge && <button onClick={() => setShowJauge(true)} disabled={selectedEnnemy ? false : true}>Attaquer</button>}
            {showJauge && 
                <div>
                    <JaugeAttack attackEnnemy={attackEnnemy} charSelected={charSelected} />
                    <button onClick={() => setShowJauge(false)}>Retour</button>
                </div>
            }


        </div>
    )
}