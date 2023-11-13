import s from './style.module.css'
import { JaugeAttack } from '../JaugeAttack/JaugeAttack'
import { useState } from 'react'

export function CharacterSection({charSelected, selectedEnnemy, attackEnnemy, showJauge, setShowJauge}) {

    

    return (
        <div className={s.container}>
            <p>{charSelected.name}</p>
            <p>{charSelected.description}</p>

            {/* Jauge de vie du personnage */}
            <div className={s.gaugeContainer}>
                <div 
                    className={s.filledGauge} 
                    style={{
                        width:`${(charSelected.hp / charSelected.maxHp) * 100}%`,
                        borderTopRightRadius: (charSelected.hp  === charSelected.maxHp) ? "5px" : "0px",
                        borderBottomRightRadius: (charSelected.hp === charSelected.maxHp) ? "5px" : "0px",
                    }}
                >
                    <i className={`fa-solid fa-heart fa-beat`} style={{color:"white"}}></i> {`${charSelected.hp}/${charSelected.maxHp}`}
                </div>
            </div>

            {/* <p><i className="fa-solid fa-burst"></i> {charSelected.attack}</p> */}

            {!showJauge && 
                <button 
                    onClick={() => setShowJauge(true)} 
                    disabled={selectedEnnemy ? false : true}
                >
                    Attaquer
                </button>
            }
            {/* Jauge d'attaque: */}
            {showJauge && 
                <div>
                    <JaugeAttack attackEnnemy={attackEnnemy} charSelected={charSelected} />
                    <button onClick={() => setShowJauge(false)}>Annuler</button>
                </div>
            }


        </div>
    )
}