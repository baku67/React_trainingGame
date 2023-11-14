export function Item({item}) {

    console.log("ITEM(Item.jsx)");
    console.log(item);

    return (
        <>
            <p>{item.name}</p>
        </>
    )
}