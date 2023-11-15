import s from './style.module.css'

export function Item({obj, isOwned, buyItem}) {

    return (
        <div className={s.container}>

            <span>{obj.name}</span>
            <p>{obj.description}</p>

            {/* Prix d'achat si section SHOP */}
            {!isOwned && 
                <>
                    <span>{obj.price}</span>
                    <button onClick={() => buyItem(obj)}>Acheter</button>
                </>
            }

        </div>
    )
}