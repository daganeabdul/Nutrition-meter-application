const { useState, useEffect } = require("react");

export default function MealForm({currentNutrition, handleChange, handleSubmit}) {

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* First part of the form thats the ItemName and Calories */}
                <div>
                    <input
                    type="text"
                    name="itemName"
                    value={currentNutrition.itemName}
                    onChange={handleChange}
                    placeholder="Item Name"  
                    required                
                    />

                    <input
                    type="number"
                    name="calories"
                    value={currentNutrition.calories}
                    onChange={handleChange}
                    placeholder="Calories"
                    required
                    />
                </div>

                 {/* Second part of the form thats the Protein and Carbs */}

                <div>
                    <input
                    type="number"
                    name="protein"
                    value={currentNutrition.protein}
                    onChange={handleChange}
                    placeholder="Protein"
                    required
                    />
                    <input
                    type="number"
                    name="carbs"
                    value={currentNutrition.carbs}
                    onChange={handleChange}
                    placeholder="Carbs"
                    required
                    />
                </div>

                {/* Third part of the form thats the Protein and Carbs */}

                    <input
                    type="number"
                    name="fat"
                    value={currentNutrition.fat}
                    onChange={handleChange}
                    placeholder="Fat"
                    required
                    />

                    <button>Add Item</button>
                                
            </form>
        </div>
    )

}