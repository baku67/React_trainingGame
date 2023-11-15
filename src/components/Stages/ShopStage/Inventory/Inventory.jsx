import { useState, useEffect } from "react";
import s from './style.module.css'
import { Item } from "../Item/Item";


export function Inventory({charSelected}) {

    const inventoryList = charSelected.inventory.map((elem) => {
        return (
            <li key={elem.name}>
                <Item obj={elem} />
            </li>
        )
    })

    return (
        <ul className={s.container}>
            {inventoryList}
        </ul>
    )
}