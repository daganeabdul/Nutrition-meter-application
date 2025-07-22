export default function MealForm({ currentNutrition, handleChange, handleSubmit }) {
    return (
        <div className="max-w-md mx-auto bg-blue-700 rounded-lg shadow-lg">
            <form onSubmit={(e) => handleSubmit(e)} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                    <label className="block mb-1 text-white text-sm font-bold">Item Name</label>
                    <input
                        className="w-full px-3 py-2 rounded bg-slate-600 text-white"
                        type="text"
                        name="itemName"
                        value={currentNutrition.itemName}
                        onChange={handleChange}
                        placeholder="Item Name"
                        required
                    />
                    </div>
                    <div>
                    <label className="block mb-1 text-white text-sm font-bold">Calories</label>
                    <input
                    className="w-full px-3 py-2 rounded bg-slate-600 text-white"
                        type="number"
                        name="calories"
                        value={currentNutrition.calories}
                        onChange={handleChange}
                        placeholder="Calories"
                        required
                    />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                    <label className="block text-white mb-1 text-sm font-bold">Protein (g)</label>
                    <input
                        className="w-full px-3 py-2 rounded bg-blue-600 text-white"
                        type="number"
                        name="protein"
                        value={currentNutrition.protein}
                        onChange={handleChange}
                        placeholder="Protein"
                        required
                    />
                    </div>
                    <div>
                    <label className="block text-white mb-1 text-sm font-bold">Carbs</label>
                    <input
                        className="w-full px-3 py-2 rounded bg-blue-600 text-white"
                        type="number"
                        name="carbs"
                        value={currentNutrition.carbs}
                        onChange={handleChange}
                        placeholder="Carbs"
                        required
                    />
                    </div>
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
