"use client";

import "./styles.css";

import Image from "next/image";
import { FormEventHandler, useState } from "react";
import { useRouter } from "next/navigation";
import SearchIcon from "../icons/search";

export default function Header() {
  const [value, setValue] = useState("");

  const { push } = useRouter();

  function handleSubmit(e: FormEventHandler | any) {
    e.preventDefault();

    push(`search?q=${value}`);
  }

  return (
    <header>
      <a href="/" className="header-logo">
        <Image
          src="logo.svg"
          alt="logo movies project"
          width={72}
          height={72}
        ></Image>
        <h1>BestMovies</h1>
      </a>
      <form onSubmit={handleSubmit} className="header-search">
        <input
          type="text"
          placeholder="O que busca?"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <button type="submit">
          <SearchIcon></SearchIcon>
        </button>
      </form>
    </header>
  );
}
