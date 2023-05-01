import React, { useState } from 'react';
import Greeter from './components/Greeter';
import ShoppingList from './components/ShoppingList';
import ShoppingListForm from './components/ShoppingListForm';
import Item from "../src/models/item";
import { v4 as getId } from "uuid";
import './App.css';

function App() {
  const [items, setItems] = useState<Item[]>([]);
  const addItem = (product: string, quantity: number) => {
    console.log("MADE TO THE APP COMPONENT!");
    // uuid사용하여 id 생성
    setItems([...items, { id: getId(), product, quantity }]);
  }

  return (
    <div>
      <ShoppingList items={items} />
      <ShoppingListForm onAddItem={addItem} />
    </div>
  );
}

export default App;
