import s from './style.module.css'

export function Item({obj, isOwned, buyItem, coinsLeft}) {

    function getItemClass() {
        console.log('proc')
        if(isOwned) {
            return ""
        }
        else {
            if (coinsLeft - obj.price >= 0) {
                return s.buyable
            }
            else {
                return s.notBuyable
            }
        }
    }

    return (
        <div 
            className={ getItemClass() } 
            style={{border:"1px solid white"}}
        >

            <span>{obj.name}</span>
            <p>{obj.description}</p>

            {/* Prix d'achat si section SHOP */}
            {!isOwned && 
                <>
                    <span>{obj.price} <i className="fa-solid fa-coins"></i></span>
                    <button onClick={() => buyItem(obj)}>Acheter</button>
                </>
            }

        </div>
    )
}