import s from './style.module.css'

export function LandingPage({launchGame}) {
    
    return (
        <div className={s.container}>
            <h1 style={{fontSize:"4em", color:"white"}}>BedTime Infringer</h1>
            <button 
                className={`form-control ${s.button}`}
                onClick={launchGame}
            >
                Lancer une partie !
            </button>
        </div>
    )
}