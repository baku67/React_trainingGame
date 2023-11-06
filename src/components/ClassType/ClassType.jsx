import s from './style.module.css'

export function ClassType({name, description, onSelectChar}) {

    return(

        <div className={s.card} onClick={() => onSelectChar(name)}>
            <h2>{name}</h2>
            <p>{description}</p>
        </div>

    )
}