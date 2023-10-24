import { Routes, Route } from "react-router-dom";
import { Header } from "components/Header";
import { Main } from "components/Main";
import { HomePage } from "pages/HomePage";
import { MoviesPage } from "pages/MoviesPage";
import { TVSeriesPage } from "pages/TVSeriesPage";
import { BookmarkedPage } from "pages/BookmarkedPage";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                data={[]}
                onSearch={function (filterResults: string): void {
                  throw new Error("Function not implemented.");
                }}
              />
            }
          />
          <Route path="/movies" element={<MoviesPage moviesData={[]} />} />
          <Route
            path="/tv-series"
            element={<TVSeriesPage tvSeriesData={[]} />}
          />
          <Route path="/bookmarked" element={<BookmarkedPage />} />
        </Routes>
      </Main>
    </>
  );
}

export default App;
