//Bad implementation

import { VideoGame } from "./src";

class Item {
    private name: string;
    private price: number;
    private relaseDate: string;

    constructor(name: string, price: number, relaseDate: string) {
        this.name = name;
        this.price = price;
        this.relaseDate = relaseDate;
    }

    public getName(): string {
        return this.name;
    }

    public getPrice(): number {
        return this.price;
    }

    public getRelaseDate(): string {
        return this.relaseDate;
    }
}

class Game extends Item {

    private genre: string;

    constructor(name: string, price: number, relaseDate: string, genre: string) {
        super(name, price, relaseDate);
        this.genre = genre;
    }

    public getGenre(): string {
        return this.genre;
    }
}

class Movie extends Item {

    private director: string;

    constructor(name: string, price: number, relaseDate: string, director: string) {
        super(name, price, relaseDate);
        this.director = director;
    }

    public getDirector(): string {
        return this.director;
    }
}

class ItemGetter {
    public getAllVideoItemsByReleaseDate(date: string, items: VideoGame[]): VideoGame[] {
        return items.filter(videoGame => videoGame.getReleaseDate() === date);
    }

    public getAllVideoItemsByHigherPrice(price: number, items: VideoGame[]): VideoGame[] {
        return items.filter(videoGame => videoGame.getPrice() > price);
    }

    public getAllVideoItemsByLowerPrice(price: number, items: VideoGame[]): VideoGame[] {
        return items.filter(videoGame => videoGame.getPrice() < price);
    }
}

class Store extends ItemGetter{
    private games: Game[] = [];
    private movies: Movie[] = [];

    constructor(games: Game[], movies: Movie[]) {
        super();
        this.games = games;
        this.movies = movies;
    }
}

//Good implementation

class MovieStore {
    private movies: Movie[] = [];

    constructor(movies: Movie[]) {
        this.movies = movies;
    
    }

    public getAllMoviesByDirector(director: string): Movie[] {
        return this.movies.filter(movie => movie.getDirector() === director);
    }
}

class VideoGameStoreAndMovies extends MovieStore {
    private games: Game[] = [];

    constructor(games: Game[], movies: Movie[]) {
        super(movies);
        this.games = games;
    }

    getAllVideoGamesByGenre(genre: string): Game[] {
        return this.games.filter(game => game.getGenre() === genre);
    }
}