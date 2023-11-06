import s from './style.module.css'

export function ClassType({name, description, onSelectChar, isSelected}) {

    return(

        <div 
            className={s.card} 
            style={{backgroundColor: isSelected ? '#171734' : '#181820ab', borderTop: isSelected ? '6px solid white' : '1px solid rgba(128, 128, 128, 0.432)'}}
            onClick={() => onSelectChar(name)}
        >
            <h2 style={{textAlign:"center"}}>{name}</h2>
            <p style={{color:"#b9b9b9", textAlign:"center", marginTop:"15px"}}>{description}</p>
        </div>

    )
}