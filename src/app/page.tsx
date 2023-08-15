"use client";

import { useState, useEffect } from "react";
import axios from "axios";

import Card from "@/components/card";

import "./page.css";

export default function Home() {
  const [topMovies, setTopMovies] = useState([]);

  async function getTopMovies() {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/movie/top_rated",
      headers: {
        accept: "application/json",
        Authorization: process.env.AUTH_KEY,
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
