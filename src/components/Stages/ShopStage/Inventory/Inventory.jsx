import { useState, useEffect } from "react";
import s from './style.module.css'
import { Item } from "../Item/Item";


export function Inventory({charSelected}) {

    const inventoryList = charSelected.inventory.map((elem) => {
        return (
            <li key={elem.name}>
                <Item obj={elem} isOwned={true} />
            </li>
        )
    })

    return (
        <div  className={s.container}>
            <h2>Inventaire</h2>
            <span>Golds: {charSelected.coins} <i className="fa-solid fa-coins"></i></span>
            <ul>
                {inventoryList}
            </ul>
        </div>
    )
}