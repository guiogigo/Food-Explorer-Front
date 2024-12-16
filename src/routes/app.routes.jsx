import { Routes, Route, Navigate } from "react-router-dom";

import { Home } from '../pages/Home'
import { Dish } from '../pages/Dish'
import { NewDish } from "../pages/NewDish";

import { useAuth } from "../hooks/auth";

export function AppRoutes() {
    const { user } = useAuth();

    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>

            <Route path="/dishes/:id" element={<Dish/>}/>
            
            
            {
                user?.role == 'admin' ? (
                    <>
                        <Route path="/newDish" element={<NewDish/>}/>
                        <Route path="/edit/:id" element={<Dish/>}/>
                    </>
                ) : null
            }
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    )
}

/*
            <Route path="*" element={<Navigate to="/" replace />} />
*/