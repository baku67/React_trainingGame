import s from './style.module.css'
import { Header } from '../../Header/Header'
import { Inventory } from './Inventory/Inventory'
import { ItemsShopList } from './ItemsShopList/ItemsShopList'

export function ShopStage({stageNbr, charSelected, inscrStageNbr, itemsList, consoList, addItem}) {

    // Quand "fini"/"valider"/"endShop", call inscrStageNbr

    return (
        <>
            <Header pageTitle={`Shop ${stageNbr/3}`} />

            <ItemsShopList 
                itemsList={itemsList} 
                consoList={consoList}
                buyItem={addItem} 
                inscrStageNbr={inscrStageNbr} 
                coinsLeft={charSelected.coins} 
            />

            <Inventory charSelected={charSelected} />

        </>
    )
}