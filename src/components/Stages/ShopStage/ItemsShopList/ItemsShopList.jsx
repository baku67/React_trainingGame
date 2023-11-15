import { useState, useEffect } from 'react'
import s from './style.module.css'
import { Item } from '../Item/Item'

export function ItemsShopList({itemsList, buyItem}) {

    const list = itemsList.map((elem) => 
        <li key={elem.name} >
            <Item obj={elem} isOwned={false} buyItem={buyItem} />
        </li>         
    ) 

    return (
        
        <ul className={s.container}>
            {list}
        </ul>

    )
}