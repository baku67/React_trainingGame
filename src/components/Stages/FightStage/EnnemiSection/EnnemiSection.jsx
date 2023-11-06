import s from './style.module.css'
import { MONSTERS } from './constant'
import { Monster } from '../Monster/Monster'

export function EnnemiSection({stageNbr}) {

    // Tant que cumul des lvl des monstres < stageNbr, on ajoute des mobs à la liste

    return (
        <div className={s.container}>
            <p>Monstres</p>
        </div>
    )
}