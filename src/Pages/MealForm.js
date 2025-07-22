const { useState } = require("react");

function MealForm() {
    //Majeor form states
    const [nutrition, setNutrition] = useState([]);
    const [currentNutrition, setCurrentNutrition] = useState({
        itemName: "",
        calories: null,
        protein: null,
        carbs: null,
        fat: null,
    })

    function handleChange(e) {
        setCurrentNutrition(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }



    
}