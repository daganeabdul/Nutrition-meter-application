import React from "react";


function MealItem({nutritions,deleteNutrition}) {

return(
    <div className="meal-item">
        <h3>{nutritions.itemName}</h3>
        <p>Calories: {nutritions.calories}</p>
        <p>Protein: {nutritions.protein}g</p>
        <p>Carbs: {nutritions.carbs}g</p>
        <p>Fat: {nutritions.fat}g</p>
        
    </div>
)
}
export default MealItem;