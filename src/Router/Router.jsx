import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AuthPage from "../pages/AuthPage";
import AdminPage from "../pages/AdminPage";
import Dashboard from "../pages/Dashboard";
import PageNotFound from "../pages/PageNotFound";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../services/User";

function Router() {
  const { data, isLoading,error } = useQuery(["profile"], getProfile);
  console.log({ data, isLoading ,error});
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/pageNotFound" element={<PageNotFound />} />
    </Routes>
  );
}

export default Router;
