import s from './style.module.css'

export function Item({obj, isOwned}) {

    return (
        <div className={s.container}>

            <span>{obj.name}</span>
            <p>{obj.description}</p>

            {/* Prix d'achat si section SHOP */}
            {!isOwned && 
                <span>{obj.price}</span>
            }

        </div>
    )
}