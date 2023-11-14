import s from './style.module.css'
import { Header } from '../../Header/Header'
import { Inventory } from './Inventory/Inventory'

export function ShopStage({stageNbr, charSelected, inscrStageNbr}) {

    // Quand "fini"/"valider"/"endShop", call inscrStageNbr

    return (
        <>
            <Header pageTitle={`Shop N°${stageNbr/2} !`} />

            {/* <ItemsShopList /> */}

            <Inventory charSelected={charSelected} />

        </>
    )
}