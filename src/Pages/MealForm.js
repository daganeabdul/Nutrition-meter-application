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

    //Function for handling the input onChange event
    function handleChange(e) {
        setCurrentNutrition(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

     function handleSubmit(e) {
        
    }

   



    
}