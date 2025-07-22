export default function MealForm({ currentNutrition, handleChange, handleSubmit }) {
    return (
        <div className="max-w-md mx-auto bg-blue-700 rounded-lg shadow-lg">
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="">
                    <input
                        className=""
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
    );
}
