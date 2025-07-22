import React from "react";


function MealItem({nutritions, onDelete, onEdit}) {

return(
    <div className="card">
        <h3>{nutritions.itemName}</h3>
        <p>Calories: {nutritions.calories}</p>
        <p>Protein: {nutritions.protein}g</p>
        <p>Carbs: {nutritions.carbs}g</p>
        <p>Fat: {nutritions.fat}g</p>
        <div className="card-buttons">
        <button onClick={onDelete} className="delete-btn">Delete</button>
        <button onClick={onEdit} className="edit-btn">Edit</button>
        </div>
    </div>
)
}
export default MealItem;