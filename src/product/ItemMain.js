import { useState } from "react";
import ItemList from "./ItemList";
import ItemTotal from "./ItemTotal"
import ItemInput from "./ItemInput"



const ItemMain = () => {
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
            price:83000,
            quantity:2,
        }
    ];
    
    const [items, setItems] = useState(itemDataArray);

    //새로운 상품 등록 이벤트 처리 함수
    const [form, setForm] = useState({
        name:"",
        price:0,
        quantity:0
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({
            ...form,
            [name]:value //추가 개념이 아니고 [name] name값을 찾아서 value 값을 변경
        });
    };

    const onCreate = () => {
        setItems([...items, form]); //추가 개념 
        alert("배달의 민족 주문~~~");
        
    };

    return (
        <>
            {/*items, totalPrice 속성(props) 값 지정*/}
            <ItemInput form={form} handleChange={handleChange} onCreate={onCreate} />
            <hr />

            <ItemList items={items} />
            <ItemTotal items={items} />
        </>
    );
};

export default ItemMain;