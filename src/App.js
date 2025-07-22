import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Pages/Layout";
import MealForm from "./Pages/MealForm";
import Home from "./Pages/Home";
import About from "./Pages/About";

export default function App() {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                <Route index element={<Home/>} />
                <Route path="/form" element={<MealForm />}/>
                {/* <Route path="/meals" element={<MealList />}/> */}
                <Route path="/about" element={<About />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}