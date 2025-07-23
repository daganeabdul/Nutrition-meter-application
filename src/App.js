import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Pages/Layout";
import MealForm from "./Pages/MealForm";
import Home from "./Pages/Home";
import About from "./Pages/About";
import MealItem from "./component/MealItem";
import MealList from "./component/MealList";
import './component/Card.css';

export default function App() {
    // Major form states
    const [nutritions, setNutrition] = useState([]);
    const [currentNutrition, setCurrentNutrition] = useState({
        itemName: "",
        calories: "",
        protein: "",
        carbs: "",
        fat: "",
    });

    // Function for handling the input onChange event
    function handleChange(e) {
        setCurrentNutrition(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
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
        };

        fetch('http://localhost:4000/nutritions', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newNutrition),
        })
            .then(res => {
                if(!res.ok) throw new Error("Failed to add nutrition");
                return res.json();
            })
            .then(data => setNutrition([...nutritions, data]))
            .catch(error => console.error("POST error:", error));

        setCurrentNutrition({
            itemName: "",
            calories: "",
            protein: "",
            carbs: "",
            fat: "",
        });
    }


    useEffect(() => {
        fetch('http://localhost:4000/nutritions')
            .then(res => {
                if(!res.ok) throw new Error("Failed to fetch");
                return res.json();
            })
            .then(data => setNutrition(data))
            .catch(error => console.error("Fetch error:", error));
    }, []);


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={
                        <Home 
                            nutritions={nutritions} 
                            // deleteNutrition={deleteNutrition} 
                        />
                    } />
                    <Route path="/form" element={
                        <MealForm
                            currentNutrition={currentNutrition}
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                        />
                    }/>
                    <Route path="/list" element={<MealList
                            nutritions={nutritions}
                            setNutrition={setNutrition}
                    />} />
                    <Route path="/about" element={<About />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

//   return (
//     <div className="">
//         <MealForm
//         currentNutrition={currentNutrition}
//         handleChange={handleChange}
//         handleSubmit={handleSubmit}/>
//         <MealList />
//     </div>
//   );
// }
