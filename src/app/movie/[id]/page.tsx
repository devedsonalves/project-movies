"use client";

import { useParams } from "next/navigation";

export default function MovieDetails() {
  const { id } = useParams();

  async function getMovie(url: string) {}

  return (
    <>
      <h1>{id}</h1>
    </>
  );
}
