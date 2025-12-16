import { Routes, Route } from "react-router";
import { Resume } from "../pages/Resume";
import { NotFound } from "../pages/NotFound";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Resume />}>   
                <Route index element={null} /> 
                <Route path="certificate/:slug" element={null} /> 
            </Route>

            <Route path="*" element={<NotFound />}/>
        </Routes>
    )
}