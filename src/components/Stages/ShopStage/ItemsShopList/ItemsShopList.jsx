import { useState, useEffect } from 'react'
import s from './style.module.css'
import { Item } from '../Item/Item'

export function ItemsShopList({itemsList}) {

    const list = itemsList.map((elem) => 
        <li key={elem.name} >
            <Item obj={elem} isOwned={false} />
        </li>         
    ) 

    return (
        
        <ul className={s.container}>
            {list}
        </ul>

    )
}