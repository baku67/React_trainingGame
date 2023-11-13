import s from './style.module.css'
import { JaugeAttack } from '../JaugeAttack/JaugeAttack'
import { useState } from 'react'

export function CharacterSection({charSelected, selectedEnnemy, attackEnnemy, showJauge, setShowJauge, turn}) {

    

    return (
        <div className={s.container}>
            
            <p>{charSelected.name}</p>
            {/* <p>{charSelected.description}</p> */}

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

            {/* Tour player: Bouton Attaquer */}
            {turn=="player" && !showJauge && 
                <button 
                    onClick={() => setShowJauge(true)} 
                    disabled={selectedEnnemy ? false : true}
                >
                    Attaquer
                </button>
            }
            {/* Tour player: Jauge d'attaque: */}
            {turn=="player" && showJauge && 
                <div>
                    <JaugeAttack attackEnnemy={attackEnnemy} charSelected={charSelected} />
                    <button onClick={() => setShowJauge(false)}>Annuler</button>
                </div>
            }


            {/* Tour ennemis: Affichage des dégats des ennemis sous la barre de vie */}
            {turn=="ennemies" && 
                <div>
                    BAMMMM
                </div>
            }


        </div>
    )
}