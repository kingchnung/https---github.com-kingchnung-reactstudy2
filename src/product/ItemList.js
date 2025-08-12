import { useState } from "react";
import Item from "./Item";

const ItemList = () => {

    const itemDataArray = [
        {
            name:"CPU",
            price:350000,
            quantity:1
        },
        {
            name:"메인보드",
            price:170000,
            quantity:1,
        },
        {
            name:"메모리",
            price:79000,
            quantity:2,
        }
    ];

    const [items] = useState(itemDataArray);

    return (
        <ul>
            {/* item이라는 props 값 지정*/}
            {items.map((item) => (
                <Item key={item.name} item={item} />
            ))}
        </ul>
    );
;}

export default ItemList;