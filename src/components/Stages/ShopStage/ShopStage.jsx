import s from './style.module.css'
import { Header } from '../../Header/Header'
import { Inventory } from './Inventory/Inventory'
import { ItemsShopList } from './ItemsShopList/ItemsShopList'

export function ShopStage({stageNbr, charSelected, inscrStageNbr}) {

    // Quand "fini"/"valider"/"endShop", call inscrStageNbr

    return (
        <>
            <Header pageTitle={`Shop N°${stageNbr/3} !`} />

            <ItemsShopList />

            <Inventory charSelected={charSelected} />

        </>
    )
}