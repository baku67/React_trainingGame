import s from './style.module.css'

export function ClassType({name, description, onSelectChar}) {

    return(

        <div className={s.card} onClick={() => onSelectChar(name)}>
            <h2 style={{textAlign:"center"}}>{name}</h2>
            <p style={{color:"#b9b9b9", textAlign:"center", marginTop:"15px"}}>{description}</p>
        </div>

    )
}