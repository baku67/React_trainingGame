import s from './style.module.css'
import { useState } from 'react'

export function Monster({object, onSelectEnnemy, isSelected}) {

    const [hp, setHp] = useState(object.hp)

    const [isHovered, setIsHovered] = useState(false)

    function getBackgroundColor() {
        if(isSelected) {
            return 'rgba(128, 128, 128, 0.500)'
        }
        else if (isHovered) {
            return 'rgba(128, 128, 128, 0.300)'
        }
        else {
            return 'rgba(128, 128, 128, 0.137)'
        }
    }

    return (
        <div 
            className={`${isSelected ? s.activeMonster : ""} ${s.monsterCard}`} 
            onClick={() => onSelectEnnemy(object)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                backgroundColor: getBackgroundColor(),

            }}
        >
            <p>{object.name}</p>
            <p>{hp} <i className={`fa-solid fa-heart ${s.heart}`}></i></p>
            <img src={object.img} className={s.monsterImg} />
        </div>
    )
}