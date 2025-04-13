// import css from "./App.module.css";
import Layout from "../Layout/Layout.jsx";
import { Routes, Route } from "react-router-dom";
import HomePage from "../HomePage/HomePage.jsx";

import LoginPage from "../LoginPage/LoginPage.jsx";
import RegistrationPage from "../RegistrationPage/RegistrationPage.jsx";
import ContactPage from "../ContactPage/ContactPage.jsx";
import { useEffect } from "react";
import { refreshUser } from "../../redux/auth/operations.js";
import { useDispatch } from "react-redux";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactPage />} />
      </Routes>
    </Layout>
  );
}
