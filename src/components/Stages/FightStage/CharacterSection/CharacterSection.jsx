import s from './style.module.css'

export function CharacterSection({charSelected}) {

    return (
        <div className={s.container}>
            <p>{charSelected}</p>
        </div>
    )
}