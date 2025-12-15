import { Routes, Route } from "react-router";

import { Resume } from "../pages/Resume";
import { FullCertificate } from "../pages/FullCertificate";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" index element={<Resume />} />
            <Route path="/full-certificate/:name" element={<FullCertificate />} />
        </Routes>
    )
}