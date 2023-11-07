import s from './style.module.css'

export function CharacterSection({charSelected}) {

    return (
        <div className={s.container}>
            <p>{charSelected.name}</p>
            <p>{charSelected.description}</p>
            <p><i className={`fa-solid fa-heart ${s.heart}`}></i> {charSelected.hp}</p>
            <p><i className="fa-solid fa-burst"></i> {charSelected.attack}</p>

            <button disabled={charSelected} >Attack</button>
        </div>
    )
}