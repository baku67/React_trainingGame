import s from './style.module.css'
import { useEffect, useState } from 'react'

export function Monster({object, onSelectEnnemy, isSelected}) {

    const [isHovered, setIsHovered] = useState(false)

    function getBackgroundColor() {
        if(isSelected) {
            return 'rgba(128, 128, 128, 0.500)'
        }
        else if (isHovered) {
            return 'rgba(128, 128, 128, 0.250)'
        }
        else {
            return 'rgba(128, 128, 128, 0.137)'
        }
    }

    console.log(object)

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
          {object && (
            <>
              <p>{object.name.charAt(0).toUpperCase() + object.name.slice(1)}</p>
      
              {object.hp === 0 ? (
                <p>DEAD</p>
              ) : (
                <p>
                  {object.hp}{" "}
                  <i className={`fa-solid fa-heart ${s.heart}`}></i>
                </p>
              )}
      
              <img
                src={object.img}
                className={`${s.monsterImg} ${
                  object.hp === 0 ? s.isDead : ""
                }`}
              />
            </>
          )}
        </div>
      );
}