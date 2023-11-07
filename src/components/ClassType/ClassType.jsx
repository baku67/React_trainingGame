import s from './style.module.css'

export function ClassType({name, description, hp, attack, onSelectChar, isSelected}) {

    return(

        <div 
            className={s.card} 
            style={{backgroundColor: isSelected ? '#171734' : '#181820ab', borderTop: isSelected ? '6px solid white' : '1px solid rgba(128, 128, 128, 0.432)'}}
            onClick={() => onSelectChar({ name:name, description:description, hp:hp, attack:attack })}
        >
            <h2 style={{textAlign:"center"}}>{name}</h2>
            <p style={{color:"#b9b9b9", textAlign:"center", marginTop:"15px"}}>{description}</p>
            <p>HP: {hp} <i className={`fa-solid fa-heart ${s.heart}`}></i></p>
        </div>

    )
}