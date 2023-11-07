import s from './style.module.css'
import { MONSTERS } from './constant'
import { Monster } from '../Monster/Monster'
import { useState } from 'react'

export function EnnemiSection({onSelectEnnemy, selectedEnnemy, stageNbr}) {

    // Tant que cumul des lvl des monstres < stageNbr, on ajoute des mobs à la liste
    // let ennemies = MONSTERS
    // const [ennemiesList, setEnnemiesList] = useState(ennemies)

    return (
        <div className={s.container}>
            <Monster 
                onSelectEnnemy={onSelectEnnemy} 
                object={MONSTERS[0]} 
                isSelected={selectedEnnemy==MONSTERS[0]}
            />
            <Monster 
                onSelectEnnemy={onSelectEnnemy} 
                object={MONSTERS[2]} 
                isSelected={selectedEnnemy==MONSTERS[2]}
            />
            <Monster 
                onSelectEnnemy={onSelectEnnemy} 
                object={MONSTERS[1]} 
                isSelected={selectedEnnemy==MONSTERS[1]}
            />
            
        </div>
    )
}