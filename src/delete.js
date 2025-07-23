function deleteNutrition (id , nutritions , setNutrition) {
        fetch(`http://localhost:4000/nutritions/${id}`,{
            method: "DELETE",
        })
        .then(res => {
            if(!res.ok) throw new Error("Failed to delete");
            setNutrition(nutritions.filter(nutrition => nutrition.id !== id ))
        })
        .catch(error => console.error("DELETE error:", error))
    }
    export default deleteNutrition;