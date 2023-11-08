import s from './style.module.css'
import { MONSTERS } from './constant'
import { Monster } from '../Monster/Monster'
import { useState } from 'react'

export function EnnemiSection({onSelectEnnemy, selectedEnnemy, stageNbr, ennemiesList}) {

    // Tant que cumul des lvl des monstres < stageNbr, on ajoute des mobs à la liste
    // let ennemies = MONSTERS
    // const [ennemiesList, setEnnemiesList] = useState(ennemies)

    console.log({ennemiesList})

    return (
        <div className={s.container}>
            <Monster 
                onSelectEnnemy={onSelectEnnemy} 
                object={ennemiesList[0]} 
                isSelected={selectedEnnemy==ennemiesList[0]}
            />
            <Monster 
                onSelectEnnemy={onSelectEnnemy} 
                object={ennemiesList[2]} 
                isSelected={selectedEnnemy==ennemiesList[2]}
            />
            <Monster 
                onSelectEnnemy={onSelectEnnemy} 
                object={ennemiesList[1]} 
                isSelected={selectedEnnemy==ennemiesList[1]}
            />
            
        </div>
    )
}