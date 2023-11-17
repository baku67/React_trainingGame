import s from './style.module.css'

export function ClassType({elem, onSelectChar, isSelected}) {

    return(

        <div 
            className={s.card} 
            style={{backgroundColor: isSelected ? '#171734' : '#181820ab', borderTop: isSelected ? '6px solid white' : '1px solid rgba(128, 128, 128, 0.432)'}}
            onClick={() => onSelectChar(elem)}
        >
            <h2 style={{textAlign:"center"}}>{elem.name}</h2>
            <p style={{color:"#b9b9b9", textAlign:"center", marginTop:"15px"}}>{elem.description}</p>
            <p>HP: {elem.hp} <i className={`fa-solid fa-heart ${s.heart}`}></i></p>
            <p>Attack: {elem.attack} <i className="fa-solid fa-explosion"></i></p>
            <p>Defense: {elem.defense} <i className="fa-solid fa-shield"></i></p>
        </div>

    )
}