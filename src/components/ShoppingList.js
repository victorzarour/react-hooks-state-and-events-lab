import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectedCategory, setSelectedCategory] = useState("")

  const searchResults = items.filter((item) => {
    if (selectedCategory === "All"){
      return items
    } else
      return item.category.includes(selectedCategory)
  })

  const shoppingListItems = searchResults.map((item) => (
    <Item key={item.id} name={item.name} category={item.category} />
  ))

  const handleSearch = (e) => {
    setSelectedCategory(e.target.value)
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleSearch} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
       {shoppingListItems} 
      </ul>
    </div>
  );
}

export default ShoppingList;
