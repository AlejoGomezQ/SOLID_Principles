class VideoGame {
    private name: string;
    private price: number;
    private releaseDate: string;

    constructor(name: string, price: number, releaseDate: string) {
        this.name = name;
        this.price = price;
        this.releaseDate = releaseDate;
    }

    public getName(): string {
        return this.name;
    }   

    public getPrice(): number {
        return this.price;
    }

    public getReleaseDate(): string {
        return this.releaseDate;
    }
}

//Bad implementation
class VideoGameStore {
    private videoGames: VideoGame[] = [];

    public getAllVideoGamesByReleaseDate(date: string): VideoGame[] {
        return this.videoGames.filter(videoGame => videoGame.getReleaseDate() === date);
    }

    public getAllVideoGamesByHigherPrice(price: number): VideoGame[] {
        return this.videoGames.filter(videoGame => videoGame.getPrice() > price);
    }

    public getAllVideoGamesByLowerPrice(price: number): VideoGame[] {
        return this.videoGames.filter(videoGame => videoGame.getPrice() < price);
    }
}

//Good implementation

class ItemStoreGetter {
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

class BetterVideoGameStore extends ItemStoreGetter {
    private videoGames: VideoGame[];

    constructor(videoGames: VideoGame[]) {
        super();
        this.videoGames = videoGames;
    }
}