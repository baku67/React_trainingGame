import { useState } from "react";
import { useEffect } from "react";

export function JaugeAttack({attackEnnemy, charSelected}) {

    const [value, setValue] = useState(0);
    const [increase, setIncrease] = useState(true);

    function handleAttack(e) {
        e.preventDefault();
        attackEnnemy(parseInt(charSelected.attack * value / 100)); 
    }

    // Idée: la jauge retombe cash à 0 après 100 pour notion de greed/save gameplay (et la jauge augmente de plus en plus, presque expo)
    useEffect(() => {
        let intervalId;

        // Démarrez l'augmentation automatique de la jauge
        const startJaugeIncrease = () => {
            intervalId = setInterval(() => {
            if (increase) {
                setValue((prevValue) => (prevValue < 100 ? prevValue + 1 : prevValue));
                if (value >= 100) {
                    setIncrease(false);
                }
            } else {
                setValue((prevValue) => (prevValue > 0 ? prevValue - 1 : prevValue));
                if (value <= 0) {
                    setIncrease(true);
                }
            }
            }, 15);
        };

        startJaugeIncrease(); // Démarrer l'augmentation automatique de la jauge

        return () => {
            clearInterval(intervalId); // Nettoyer le setInterval lorsque le composant est démonté
        };
    }, [value, increase]);



    return (
        <>
            <form>
                <input 
                    type="range" 
                    value={value} 
                    max={100}
                    onChange={(e) => console.log(e.target.value)} 
                />
                <button type="submit" onClick={handleAttack}>
                    {parseInt(charSelected.attack * value / 100)}
                    &nbsp; <i className="fa-solid fa-burst"></i>
                </button>
            </form>
        </>
    )
}