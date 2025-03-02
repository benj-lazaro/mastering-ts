import React, { JSX, useRef } from "react";

interface ShoppingListFormProps {
    onAddItem: (item: string) => void
}


function ShoppingListForm({onAddItem}: ShoppingListFormProps): JSX.Element {

    const inputRef = useRef<HTMLInputElement>(null);

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        const newProduct = inputRef.current!.value;
        onAddItem(newProduct);
        inputRef.current!.value = "";
    }

    return <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Product Name" ref={inputRef} />
        <button type="submit">Add Item</button>
    </form>
}

export default ShoppingListForm;