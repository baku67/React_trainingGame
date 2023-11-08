export function JaugeAttack({attackEnnemy, charSelected}) {


    function handleAttack(e) {
        e.preventDefault();
        attackEnnemy(charSelected.attack); 
    }

    return (
        <>
            <form>
                <input type="range" />
                <button type="submit" onClick={handleAttack}>Go</button>
            </form>
        </>
    )
}