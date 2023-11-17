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

            {/* Jauge de vie du personnage (à factoriser Component) */}
            <div className={s.gaugeContainer}>
                <div 
                    className={s.filledGauge} 
                    style={{
                        width:`${(charSelected.hp / charSelected.maxHp) * 100}%`,
                        borderTopRightRadius: (charSelected.hp  === charSelected.maxHp) ? "5px" : "0px",
                        borderBottomRightRadius: (charSelected.hp === charSelected.maxHp) ? "5px" : "0px",
                    }}
                >
                    <i className={`fa-solid fa-heart fa-beat`} style={{color:"white"}}></i> {`${charSelected.hp}/${charSelected.maxHp}`}
                </div>
            </div>


            <h2>Inventaire</h2>
            <span>Golds: {charSelected.coins} <i className="fa-solid fa-coins"></i></span>
            <ul>
                {inventoryList}
            </ul>
        </div>
    )
}