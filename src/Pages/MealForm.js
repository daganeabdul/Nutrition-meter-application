const { useState } = require("react");

function MealForm() {
    const [nutrition, setNutrition] = useState([]);
    const [currentNutrition, setCurrentNutrition] = useState({
        itemName: "",
        calories: null,
        protein: null,
        carbs: null,
        fat: null,
    })

    
}