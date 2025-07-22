import { useState,useEffect } from "react";
import MealForm from "./Pages/MealForm";

function App() {
      //Majeor form states
    const [nutritions, setNutrition] = useState([]);
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
        e.preventDefault();
        const newNutrition = {
            ...currentNutrition,
            itemName: currentNutrition.itemName,
            calories: currentNutrition.calories,
            protein: currentNutrition.protein,
            carbs: currentNutrition.carbs,
            fat: currentNutrition.fat,
        }

        fetch('http://localhost:4000/nutritions', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newNutrition),
        })
            .then(res => {
                if(!res.ok) throw new Error("Failed to add nutrition");
                return res.json()
            })
            .then(data => setNutrition([...nutritions, data]))
            .catch(error => console.error("POST error:", error));


        setCurrentNutrition({
        itemName: "",
        calories: null,
        protein: null,
        carbs: null,
        fat: null,
        })
    }

    function deleteNutrition(id) {
        fetch(`http://localhost:4000/${id}`,{
            method: "DELETE",
        })
        .then(res => {
            if(!res.ok) throw new Error("Failed to delete");
            setNutrition(nutritions.filter(nutrition => nutrition.id !== id ))
        })
        .catch(error => console.error("DELETE error:", error))
    }

    useEffect(() => {
        fetch('http://localhost:4000/nutritions')
            .then(res => {
                if(!res.ok) throw new Error("Failed to fetch");
                return res.json();
            })
            .then(data => setNutrition(data))
            .catch(error => console.error("Fetch error:", error))
    }, []);

  return (
    <div className="">
        <MealForm
        currentNutrition={currentNutrition}
        handleChange={handleChange}
        handleSubmit={handleSubmit}/>
    </div>
  );
}

export default App;
