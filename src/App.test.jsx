import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { Films, FilmsList, Film } from "./App";

// 1. Test headings are displayed
test("headings are displayed", () => {
    const films = [
        {
            id: 3,
            title: "The Godfather",
            year: 1972,
            genre: "Crime/Drama",
            director: "Francis Ford Coppola",
        },
    ];
    render(<Films films={films} />);

    const yearHeader = screen.getByRole("columnheader", { name: /year/i });
    expect(yearHeader).toBeInTheDocument();

    const titleHeader = screen.getByRole("columnheader", { name: /title/i });
    expect(titleHeader).toBeInTheDocument();

    const genreHeader = screen.getByRole("columnheader", { name: /genre/i });
    expect(genreHeader).toBeInTheDocument();

    const directorHeader = screen.getByRole("columnheader", {
        name: /director/i,
    });
    expect(directorHeader).toBeInTheDocument();

    const Title = screen.getByText("Title");
    expect(Title).toBeInTheDocument();
    const Year = screen.getByText("Year");
    expect(Year).toBeInTheDocument();
    const Genre = screen.getByText("Genre");
    expect(Genre).toBeInTheDocument();
    const Director = screen.getByText("Director");
    expect(Director).toBeInTheDocument();
});

// 2. Test a film is displayed
test("A film is displayed", () => {
    const films = [
        {
            id: 1,
            title: "Titanic",
            year: 1997,
            genre: "Romance",
            director: "James Cameron",
        },
    ];
    render(
        <Films films={films} />
    );
    const filmTitle = screen.getByText("Titanic");
    expect(filmTitle).toBeInTheDocument();

    const filmYear = screen.getByText("1997");
    expect(filmYear).toBeInTheDocument();

    const filmGenre = screen.getByText("Romance");
    expect(filmGenre).toBeInTheDocument();

    const filmDirector = screen.getByText("James Cameron");
    expect(filmDirector).toBeInTheDocument();
});

// 3. Test that expected film title is displayed
test("the expected film is displayed", () => {
    const films = [
        {
            id: 4,
            title: "The Dark Knight",
            year: 2008,
            genre: "Action/Crime/Drama",
            director: "Christopher Nolan",
        },
        {
            id: 5,
            title: "Forrest Gump",
            year: 1994,
            genre: "Drama/Romance",
            director: "Robert Zemeckis",
        },
    ];
    render(
        <table>
            <tbody>
                <FilmsList films={films} />
            </tbody>
        </table>
    );

    const filmExpected1 = screen.getByText("The Dark Knight");
    expect(filmExpected1).toBeInTheDocument();

    const filmExpected2 = screen.getByText("Forrest Gump");
    expect(filmExpected2).toBeInTheDocument();
});

// 4. Test that film details are displayed
test("the film details are displayed", () => {
    const film = {
        id: 15,
        title: "The Shawshank Redemption",
        year: 1994,
        genre: "Drama",
        director: "Frank Darabont",
    };
    render(
        <table>
            <tbody>
                <Film film={film} />
            </tbody>
        </table>
    );
    const filmDetail = screen.getByText("The Shawshank Redemption");
    expect(filmDetail).toBeInTheDocument();
});
