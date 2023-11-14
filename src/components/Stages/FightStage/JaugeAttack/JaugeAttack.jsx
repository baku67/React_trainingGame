import { useState } from "react";
import { useEffect } from "react";

export function JaugeAttack({attackEnnemy, charSelected}) {

    const [value, setValue] = useState(0);

    function handleAttack(e) {
        e.preventDefault();
        attackEnnemy(parseInt(charSelected.attack * value / 100)); 
    }


    useEffect(() => {

        // *** La jauge se lance automatiquement, et retombe cash à 0 après 100 (cycles) pour notion de greed/save gameplay 
        let intervalId;

        const startJaugeIncrease = () => {
          intervalId = setInterval(() => {
            setValue((prevValue) => (prevValue < 100 ? prevValue + 1 : 0));
          }, 10);
        };
    
        startJaugeIncrease();
        // *** Fin Jauge cycles

        // *** [ESPACE] pour valider jaugeAttack
            const handleSpacePress = (e) => {
            if (e.code === "Space") {
                // Trigger the button click when space is pressed
                handleAttack(e);
            }
            };
        
            const handleSpaceRelease = () => {
            // Stop the button click when space is released
            clearInterval(intervalId);
            };
        
            // Add event listeners for keydown and keyup
            window.addEventListener("keydown", handleSpacePress);
            window.addEventListener("keyup", handleSpaceRelease);
        
            return () => {
                // Clean up event listeners when the component is unmounted
                window.removeEventListener("keydown", handleSpacePress);
                window.removeEventListener("keyup", handleSpaceRelease);
                clearInterval(intervalId);
            };

      }, [value]);



    return (
        <>
            <form>
                {/* Jauge d'attaque */}
                <input 
                    type="range" 
                    value={value} 
                    max={100}
                    onChange={() => console.log(value)}
                />
                {/* Bouton d'attaque */}
                <button type="submit" onClick={handleAttack}>
                    {parseInt(charSelected.attack * value / 100)}
                    &nbsp; <i className="fa-solid fa-burst"></i>
                </button>
            </form>
        </>
    )
}