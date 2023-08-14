"use client";

import { useState, useEffect } from "react";
import axios from "axios";

import Card from "@/components/card";

import "./page.css";

const moviesUrl = "https://api.themoviedb.org/3/movie/";

export default function Home() {
  const [topMovies, setTopMovies] = useState([]);

  async function getTopMovies() {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/movie/top_rated",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NzM5MWRlNzgxZjQyMjIwOGVlNjY1ZmQzZjBmZTkzMSIsInN1YiI6IjY0ZDY3ZjgwZDEwMGI2MDBhZGEwYjRkNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8ZXwcBJ6nUAQ5-IT_u5ajl7YyxYvpmn6QN5sTd43gRg",
      },
    };

    const request = await axios.request(options);

    setTopMovies(request.data.results);
  }

  useEffect(() => {
    getTopMovies();
  }, []);

  return (
    <>
      <h1 className="title">FILMES MELHORES AVALIADOS</h1>
      {topMovies.length === 0 ? (
        <p className="loading">Carregando...</p>
      ) : (
        <section className="movies">
          {topMovies.map((movie) => (
            <Card movie={movie} />
          ))}
        </section>
      )}
    </>
  );
}
