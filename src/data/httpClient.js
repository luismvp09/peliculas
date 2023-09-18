const API = "https://api.themoviedb.org/3";

export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOTk1N2E1MjNkYTk4MzBjMTQ5MzkwZDIwMTRmNDYzYSIsInN1YiI6IjYzZTk0Y2U4YTJlNjAyMDBkNGFmNTY2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FjoRYKYBw9wzaCGe4sHOrPR6mKgYFzgVI1H71Eoh5NQ",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
}
