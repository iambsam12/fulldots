import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/admin/Dashboard";
import AllNews from "./components/admin/pages/news/AllNews";
import CreateNews from "./components/admin/pages/news/CreateNews";
import UpdateNews from "./components/admin/pages/news/UpdateNews";
import UpdateNewsImage from "./components/admin/pages/news/UpdateNewsImage";
import PrivateRoute from "./components/routes/PrivateRoute";
import Login from "./pages/auth/Login";
import Header from "./english/nav/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/admin/login" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/all-news" element={<AllNews />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/add-news" element={<CreateNews />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/update-news/:id" element={<UpdateNews />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/updatenImage/:id" element={<UpdateNewsImage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
