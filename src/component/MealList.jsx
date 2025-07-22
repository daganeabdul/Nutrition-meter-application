import React from "react";
import MealItem from "./MealItem";
import { deleteNutrition } from "../App.js";

function MealList ({nutritions}) {
    return (
        <div className="meal-list">
            {nutritions.map(nutrition => (
                <MealItem 
                key={nutrition.id}
                nutritions={nutrition} 
                onDelete = {() =>
                    deleteNutrition(nutrition.id, nutritions, setNutrition)
                } />
            ))}
            {nutritions.length === 0 && <p>No meals added yet.</p>}
        </div>
    )
}
export default MealList;