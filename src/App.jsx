import "./App.css";
import films from "./films";

export default function App() {
  return <Films films={films} />;
}

// 1. Test headings are displayed
// 2. Test a film is displayed

export function Films({ films }) {
  return (
    <main>
      <div className="header">
        <h2>Films list: Unit testing with Vitest</h2>
      </div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Year</th>
            <th>Genre</th>
            <th>Director</th>
          </tr>
        </thead>
        <tbody>
          <FilmsList films={films} />
        </tbody>
      </table>
    </main>
  );
}

// 3. Test that expected product title is displayed

export function FilmsList({ films }) {
  return (
    <>
      {films.map((film) => (
        <Film key={film.id} film={film} />
      ))}
    </>
  );
}

// 4. Test that film details are displayed

export function Film({ film }) {
  return (
    <tr key={film.id}>
      <td>{film.title}</td>
      <td>{film.year}</td>
      <td>{film.genre}</td>
      <td>{film.director}</td>
    </tr>
  );
}

