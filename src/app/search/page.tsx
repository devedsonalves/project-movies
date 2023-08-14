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
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NzM5MWRlNzgxZjQyMjIwOGVlNjY1ZmQzZjBmZTkzMSIsInN1YiI6IjY0ZDY3ZjgwZDEwMGI2MDBhZGEwYjRkNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8ZXwcBJ6nUAQ5-IT_u5ajl7YyxYvpmn6QN5sTd43gRg",
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
