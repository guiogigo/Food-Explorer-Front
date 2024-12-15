import { Routes, Route, Navigate } from "react-router-dom";

import { Home } from '../pages/Home'
import { Dish } from '../pages/Dish'
import { SignIn } from "../pages/SignIn";

export function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>

            <Route path="/dishes/:id" element={<Dish/>}/>
            <Route path="/sla" element={<SignIn/>}/>

            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    )
}