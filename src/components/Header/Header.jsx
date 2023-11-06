import s from './style.module.css'

export function Header({pageTitle, subText}) {
    return (
        <div className={s.headerContainer}>
            <h1 style={{textAlign:"center"}}>{pageTitle}</h1>
            <p>{subText}</p>
        </div>
    )
}