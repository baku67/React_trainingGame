import s from './style.module.css'
import { MONSTERS } from './constant'
import { Monster } from '../Monster/Monster'
import { useState, useEffect } from 'react'

export function EnnemiSection({onSelectEnnemy, selectedEnnemy, stageNbr, ennemiesList}) {

    console.log(ennemiesList);

    useEffect(() => {
        console.log('Updated ennemiesList in EnnemiSection:', ennemiesList);
      }, [ennemiesList]);

    const ennemies = ennemiesList.map((elem) => 
        <li key={elem.id}>
            <Monster
                onSelectEnnemy={onSelectEnnemy}
                object={elem}
                isSelected={selectedEnnemy === elem}
            />
        </li>
    );

    return (
        <>
            {ennemiesList && ennemiesList.length > 0 && (
                <ul className={s.container}>
                    {ennemies}
                </ul>
            )}
        </>
    )
}