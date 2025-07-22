import React from "react";
import MealItem from "./MealItem";

function MealList ({nutritions}) {
    return (
        <div className="meal-list">
            {nutritions.map(nutrition => (
                <MealItem key={nutrition.id} nutritions={nutrition} deleteNutrition={nutrition.deleteNutrition} />
            ))}
            {nutritions.length === 0 && <p>No meals added yet.</p>}
        </div>
    )
}
export default MealList;