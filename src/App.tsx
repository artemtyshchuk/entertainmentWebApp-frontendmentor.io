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
          <Route path="/" element={<HomePage data={[]} />} />
          <Route path="/movies" element={<MoviesPage data={[]} />} />
          <Route path="/tv-series" element={<TVSeriesPage data={[]} />} />
          <Route path="/bookmarked" element={<BookmarkedPage />} />
        </Routes>
      </Main>
    </>
  );
}

export default App;
