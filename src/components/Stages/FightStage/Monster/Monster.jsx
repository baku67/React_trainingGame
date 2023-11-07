import s from './style.module.css'
import { useState } from 'react'

export function Monster({object, onSelectEnnemy, isSelected}) {

    const [hp, setHp] = useState(object.hp)

    return (
        <div 
            className={`${isSelected ? s.activeMonster : ""} ${s.monsterCard}`} 
            onClick={() => onSelectEnnemy(object)}
            style={{backgroundColor: isSelected ? 'rgba(128, 128, 128, 0.500)' : 'rgba(128, 128, 128, 0.137)'}}
        >
            <p>{object.name}</p>
            <p>{hp} <i className={`fa-solid fa-heart ${s.heart}`}></i></p>
            <img src={object.img} className={s.monsterImg} />
        </div>
    )
}