import s from './style.module.css'
import { ELEMENTS } from './constant'
import { Header } from '../Header/Header'
import { ClassType } from '../ClassType/ClassType'
import { useState } from 'react'


export function SelectChar({onSelectChar, isCharSelected}) {

    const [classTypes, setClassTypes] = useState(ELEMENTS)

    const [isClassTypeSelected, setIsClassTypeSelected] = useState(false)

    const [classTypeSelected, setClassTypeSelected] = useState("")


    function selectClassType(classType) {
        setIsClassTypeSelected(true)
        setClassTypeSelected(classType)
    }


    const result = classTypes.map((elem) => {
        return (
            <ClassType 
                key={elem.name} 
                name={elem.name} 
                description={elem.description} 
                hp={elem.hp}
                attack={elem.attack}
                onSelectChar={selectClassType}
                isSelected={classTypeSelected.name==elem.name ? true : false}
            />
        )
    })

    return(
        <div className={s.container}>
            <Header pageTitle={"Choose your character"} subTitle="" />
            <div className={s.classTypeContainer}>
                {result}
            </div>
            <button 
                disabled={!isClassTypeSelected} 
                className={`btn btn-primary ${s.validateCharSelect}`}
                onClick={() => onSelectChar(classTypeSelected)}
            >
                Valider
            </button>
        </div>
    )

}