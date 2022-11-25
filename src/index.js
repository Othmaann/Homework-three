import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/pages/layout/Layout";
import Profile from "./components/pages/loginsignup/profile";
import AddMovie from "./components/addMovie/addMovie";
import Movie from "./components/addMovie/movie";
import MovieItem from "./components/addMovie/movieItem";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App></App>}></Route>
          <Route path="login" element={<Profile />}></Route>
          <Route path="addMovie" element={<AddMovie />}></Route>
          <Route path="Movie" element={<Movie />}></Route>
          <Route path="Movie/:name" element={<MovieItem />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);
