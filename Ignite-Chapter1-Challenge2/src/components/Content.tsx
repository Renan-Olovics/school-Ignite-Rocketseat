import { useEffect, useState } from "react"

import { MovieCard } from "../components/MovieCard"
import { SideBar } from "../components/SideBar"

import { GenreResponseProps } from "../@types/genre"
import { MovieProps } from "../@types/genre"

import { api } from "../services/api"

import "../styles/content.scss"

export function Content() {
  const [selectedGenreId, setSelectedGenreId] = useState(1)

  const [genres, setGenres] = useState<GenreResponseProps[]>([])

  const [movies, setMovies] = useState<MovieProps[]>([])
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps)

  useEffect(() => {
    api.get<GenreResponseProps[]>("genres").then((response) => {
      setGenres(response.data)
    })
  }, [])

  useEffect(() => {
    api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then((response) => {
      setMovies(response.data)
    })

    api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then((response) => {
      setSelectedGenre(response.data)
    })
  }, [selectedGenreId])

  function handleClickButton(id: number) {
    setSelectedGenreId(id)
  }

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SideBar
        genres={genres}
        selectedGenreId={selectedGenreId}
        handleClickButton={handleClickButton}
      />
      <div className="container">
        <header>
          <span className="category">
            Categoria:<span> {selectedGenre.title}</span>
          </span>
        </header>

        <main>
          <div className="movies-list">
            {movies.map((movie) => (
              <MovieCard
                key={movie.imdbID}
                title={movie.Title}
                poster={movie.Poster}
                runtime={movie.Runtime}
                rating={movie.Ratings[0].Value}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
