import { useState, useEffect } from "react";
import s from './style.module.css'


export function Inventory({charSelected}) {


    const inventoryList = charSelected.inventory.map((elem) => {
        return (
            <li key={elem.name}>{elem.name}</li>
        )
    })

    return (
        <ul className={s.container}>
            {inventoryList}
        </ul>
    )
}