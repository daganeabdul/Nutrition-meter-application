// export default function MealForm({ currentNutrition, handleChange, handleSubmit }) {
//     return (
//         <div>
//             <form onSubmit={(e) => handleSubmit(e)}>
//                 <div className="">
//                     <input
//                         className=""
//                         type="text"
//                         name="itemName"
//                         value={currentNutrition.itemName}
//                         onChange={handleChange}
//                         placeholder="Item Name"
//                         required
//                     />
//                     <input
//                         type="number"
//                         name="calories"
//                         value={currentNutrition.calories}
//                         onChange={handleChange}
//                         placeholder="Calories"
//                         required
//                     />
//                 </div>
//                 <div>
//                     <input
//                         type="number"
//                         name="protein"
//                         value={currentNutrition.protein}
//                         onChange={handleChange}
//                         placeholder="Protein"
//                         required
//                     />
//                     <input
//                         type="number"
//                         name="carbs"
//                         value={currentNutrition.carbs}
//                         onChange={handleChange}
//                         placeholder="Carbs"
//                         required
//                     />
//                 </div>
//                 <input
//                     type="number"
//                     name="fat"
//                     value={currentNutrition.fat}
//                     onChange={handleChange}
//                     placeholder="Fat"
//                     required
//                 />
//                 <button>Add Item</button>
//             </form>
//         </div>
//     );
// }

export default function MealForm({ currentNutrition, handleChange, handleSubmit }) {
    return (
        <div className="max-w-md mx-auto bg-blue-700 p-6 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-white text-sm font-bold mb-1">Item Name</label>
                        <input
                            className="w-full px-3 py-2 rounded bg-blue-600 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            type="text"
                            name="itemName"
                            value={currentNutrition.itemName}
                            onChange={handleChange}
                            placeholder="e.g. Chicken Breast"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-white text-sm font-bold mb-1">Calories</label>
                        <input
                            className="w-full px-3 py-2 rounded bg-blue-600 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            type="number"
                            name="calories"
                            value={currentNutrition.calories}
                            onChange={handleChange}
                            placeholder="kcal"
                            required
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-white text-sm font-bold mb-1">Protein (g)</label>
                        <input
                            className="w-full px-3 py-2 rounded bg-blue-600 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            type="number"
                            name="protein"
                            value={currentNutrition.protein}
                            onChange={handleChange}
                            placeholder="Protein"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-white text-sm font-bold mb-1">Carbs (g)</label>
                        <input
                            className="w-full px-3 py-2 rounded bg-blue-600 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            type="number"
                            name="carbs"
                            value={currentNutrition.carbs}
                            onChange={handleChange}
                            placeholder="Carbs"
                            required
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-white text-sm font-bold mb-1">Fat (g)</label>
                    <input
                        className="w-full px-3 py-2 rounded bg-blue-600 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        type="number"
                        name="fat"
                        value={currentNutrition.fat}
                        onChange={handleChange}
                        placeholder="Fat"
                        required
                    />
                </div>

                <button 
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-150 mt-4"
                >
                    Add Nutrition Item
                </button>
            </form>
        </div>
    );
}