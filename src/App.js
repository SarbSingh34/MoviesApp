import React from "react";
import "./styles.css";
import { useState } from "react";

const movies = {
  Comedy: [
    { name: "Housefull 3", rating: "4.5/5" },
    { name: "Dhammal", rating: "3.5/5" }
  ],

  Action: [
    {
      name: "Bagghi 3",
      rating: "5/5"
    },
    {
      name: "Brothers",
      rating: "4.5/5"
    }
  ],
  business: [
    {
      name: "Bazzar",
      rating: "3.5/5"
    },
    {
      name: "Guru",
      rating: "4/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("business");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> 🎞️ Movies </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Let's Dig in Entertainment Zone. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(movies).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "lightblue",
              borderRadius: "0.5rem",
              padding: "0.6rem  1rem",
              border: "2px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {movies[selectedGenre].map((movie) => (
            <li
              key={movie.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {movie.name} </div>
              <div style={{ fontSize: "smaller" }}> {movie.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
