"use client";

import "@/app/page.css";

import Card from "@/components/card";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function Search() {
  const [movies, setMovies] = useState([]);

  const { get } = useSearchParams();
  const query = get("q");

  async function getSearchMovies(query: string | any) {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/search/collection",
      params: {
        query: query,
      },
      headers: {
        accept: "application/json",
        Authorization: process.env.AUTH_KEY,
      },
    };

    const request = await axios.request(options);

    setMovies(request.data.results);
  }

  useEffect(() => {
    getSearchMovies(query);
  }, [query]);

  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1 className="title">RESULTADOS PARA: {query?.toUpperCase()}</h1>
      {movies.length === 0 ? (
        <p className="loading">Carregando...</p>
      ) : (
        <section className="movies">
          {movies.map((movie) => (
            <Card movie={movie} />
          ))}
        </section>
      )}
    </section>
  );
}
