import { Routes, Route } from "react-router";

import { Resume } from "../pages/Resume";
import { FullCertificate } from "../pages/FullCertificate";
import { FullCertificateLayout } from "../layout/FullCertificateLayout";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" index element={<Resume />} />
            <Route path="/full-certificate/:name" element={<FullCertificateLayout />} >
                <Route path="/full-certificate/:name" element={<FullCertificate />} />
            </Route>
        </Routes>
    )
}