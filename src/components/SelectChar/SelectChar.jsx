import s from './style.module.css'
import { ELEMENTS } from './constant'
import { Header } from '../Header/Header'
import { ClassType } from '../ClassType/ClassType'
import { useState } from 'react'


export function SelectChar({onSelectChar}) {

    const [classTypes, setClassTypes] = useState(ELEMENTS)

    const result = classTypes.map((elem) => {
        return (
            <ClassType 
                key={elem.name} 
                name={elem.name} 
                description={elem.description} 
                onSelectChar={onSelectChar}
            />
        )
    })

    return(
        <div className={s.container}>
            <Header pageTitle={"Choose your character"} subTitle="" />
            <div className={s.classTypeContainer}>
                {result}
            </div>
        </div>
    )

}