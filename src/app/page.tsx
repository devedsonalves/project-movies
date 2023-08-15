"use client";

import { useState, useEffect } from "react";
import axios from "axios";

import Card from "@/components/card";

import "./page.css";
import Head from "next/head";

export default function Home() {
  const [topMovies, setTopMovies] = useState([]);

  async function getTopMovies() {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/movie/top_rated",
      headers: {
        accept: "application/json",
        Authorization: "Bearer " + process.env.AUTH_KEY,
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
      <Head>
        <title>Search | Best Movies</title>
      </Head>
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
