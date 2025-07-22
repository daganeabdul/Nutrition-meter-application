import React from "react";


function MealItem({nutritions, onDelete, onEdit}) {

return(
    <div className="meal-item">
        <h3>{nutritions.itemName}</h3>
        <p>Calories: {nutritions.calories}</p>
        <p>Protein: {nutritions.protein}g</p>
        <p>Carbs: {nutritions.carbs}g</p>
        <p>Fat: {nutritions.fat}g</p>
        <button onClick={onDelete}>Delete</button>
        <button onClick={onEdit}>Edit</button>
    </div>
)
}
export default MealItem;