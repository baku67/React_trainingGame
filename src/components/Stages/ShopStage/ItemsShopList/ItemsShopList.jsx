import { useState, useEffect } from 'react'
import s from './style.module.css'
import { Item } from '../Item/Item'

export function ItemsShopList({itemsList, consoList, buyItem, inscrStageNbr, coinsLeft}) {


    const list = itemsList.map((elem) => 
        <li key={elem.name} >
            <Item 
                coinsLeft={coinsLeft}
                obj={elem} 
                isOwned={false} 
                buyItem={buyItem} 
            />
        </li>         
    ) 

    const buybaleConsoList = consoList.map((elem) => 
        <li key={elem.name} >
            <Item 
                coinsLeft={coinsLeft}
                obj={elem} 
                isOwned={false} 
                buyItem={buyItem} 
            />
        </li>         
    ) 

    return (
        <>
            <ul className={s.container}>
                {list}
                {buybaleConsoList}
            </ul>

            <button 
                onClick={() => inscrStageNbr()}
            >
                Stage suivant -{'>'}
            </button>
        </>

    )
}