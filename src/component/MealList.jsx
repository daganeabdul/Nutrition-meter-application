import React from "react";
import MealItem from "./MealItem";
import deleteNutrition from "../delete"

function MealList ({nutritions, setNutrition}) {
    const handleEdit = (nutritions) => {
      const updatedName = prompt("Enter new food name:", nutritions.itemName);
        if(updatedName && updatedName !== nutritions.itemName){
        const updatedMeal = {...nutritions, itemName: updatedName};

        fetch(`http://localhost:4000/nutritions/${nutritions.id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(updatedMeal),
        })
        .then((res) => res.json())
        .then((data) =>{
            const updatedList = nutritions.map((nutrition) =>
                nutrition.id === data.id ? data : nutrition)
            setNutrition(updatedList);})
         .catch((error) => {
            console.error("PATCH error:", error);})
      }
    }

    return (
        <div className="meal-list">
            {nutritions.map(nutrition => (
                <MealItem 
                key={nutrition.id}
                nutritions={nutrition} 
                onDelete = {() =>deleteNutrition(nutrition.id, nutritions, setNutrition)}
                 onEdit = {() => handleEdit(nutrition)}/>
            ))}
            {nutritions.length === 0 && <p>No meals added yet.</p>}
        </div>
    )
}
export default MealList;