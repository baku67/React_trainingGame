import s from './style.module.css'
import { Header } from '../../Header/Header'
import { Inventory } from './Inventory/Inventory'
import { ItemsShopList } from './ItemsShopList/ItemsShopList'

export function ShopStage({stageNbr, charSelected, inscrStageNbr, itemsList}) {

    // Quand "fini"/"valider"/"endShop", call inscrStageNbr

    console.log("ITEMS(ShopStage)")
    console.log(itemsList)

    return (
        <>
            <Header pageTitle={`Shop N°${stageNbr/3} !`} />

            <ItemsShopList itemsList={itemsList} />

            <Inventory charSelected={charSelected} />

        </>
    )
}