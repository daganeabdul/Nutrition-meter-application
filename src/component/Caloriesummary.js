function CalorieSummary({ meals = [] }) {
  const totalCalories = meals.reduce((sum, meal) => sum + Number(meal.calories), 0);
  const calorieLimit = 2200;

  return (
    <div className="summary">
      <h2>Total Calories: {totalCalories}</h2>
      {totalCalories > calorieLimit && (
        <p style={{ color: "red" }}>
          ⚠️ Warning: You've exceeded the recommended daily limit!
        </p>
      )}
    </div> 
  );
}

export default CalorieSummary;