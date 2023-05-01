import react from "react";
import Item from "../models/item";

interface ShoppingListProps {
    items: Item[]; // items를 아이템[배열]로 받는다
}

const ShoppingList = ({
    items
}: ShoppingListProps): JSX.Element => {
    return (
        <div>
            <h1>Shopping List</h1>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        {item.product} - {item.quantity}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ShoppingList;