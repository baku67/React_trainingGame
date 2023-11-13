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
            <li key={elem.name}>
                <ClassType 
                    elem={elem}
                    onSelectChar={selectClassType}
                    isSelected={classTypeSelected.name==elem.name ? true : false}
                />
            </li>
        )
    })

    return(
        <div className={s.container}>
            <Header pageTitle={"Choose your character"} subTitle="" />
            <ul className={s.classTypeContainer}>
                {result}
            </ul>
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