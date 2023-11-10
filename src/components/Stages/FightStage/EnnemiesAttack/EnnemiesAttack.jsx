import s from './style.module.css'

export function EnnemiesAttack({ennemiesList, charSelected}) {

    return (
        <div className={s.container}>
            <h2>Tour des ennemies</h2>
            <p>{`${charSelected.hp} - ${ennemiesList.reduce((acc, objet) => acc + objet.attack, 0)}`}</p>
        </div>
    )
}