import React, { useRef } from "react";

interface ShoppingListFormProps {
    onAddItem: (item: string, quantity: number) => void;
}

const ShoppingListForm = ({ onAddItem }: ShoppingListFormProps): JSX.Element => {

    // 1. Reference 설정
    const productInputRef = useRef<HTMLInputElement>(null);
    const quantityInputRef = useRef<HTMLInputElement>(null);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        // 값 가져오기
        const newProduct = productInputRef.current!.value;
        const quantity = parseInt(quantityInputRef.current!.value);

        // List에 Item추가하기
        onAddItem(newProduct, quantity);

        // 값 초기화
        productInputRef.current!.value = "";
        quantityInputRef.current!.value = "1";
    }

    return (
        <form onSubmit={handleSubmit}>
            {/* 2. ref 설정 */}
            <input type="text" placeholder="Product Name" ref={productInputRef} />
            <input type="number" min={0} ref={quantityInputRef} value={1}/>
            <button type="submit">Add Item</button>
        </form>
    );
}

export default ShoppingListForm;