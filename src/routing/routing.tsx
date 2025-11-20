// Libraries Imports
import { BrowserRouter, Route, Routes } from "react-router";
// Local Imports
import HomePage from "@/pages/home";

export default function AppRouting() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
