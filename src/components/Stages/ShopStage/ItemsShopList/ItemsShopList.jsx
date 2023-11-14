import { useState, useEffect } from 'react'
import s from './style.module.css'
import { Item } from '../Item/Item'

export function ItemsShopList({itemsList}) {

    console.log("ITEMS(ItemsShopList.jsx)")
    console.log(itemsList)


    const list = itemsList.map((elem) => {
         return (
            // <li>
            //     <Item elem={elem} />
            // </li>
            <li>{elem.name}</li>
         )
    }) 

    return (
        
        <ul className={s.container}>
            {/* {list && list} */}
            {list}
        </ul>

    )
}