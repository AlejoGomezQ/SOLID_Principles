//Bad implementation

interface PcVideoGame {
    play(): void;
    save(): void;
    overwriteSave(): void;
    load(): void;
}

class hardcoreVideoGame implements PcVideoGame {
    play(): void {
        console.log("Playing hardcore game");
    }

    save(): void {
        throw new Error("Can't save hardcore game");
    }

    overwriteSave(): void {
        throw new Error("Can't overwrite save hardcore game");
    }

    load(): void {
        throw new Error("Can't load hardcore game");
    }
}

//Good implementation

interface PcGame {
    play(): void;
}

interface SaveAndLoad {
    save(): void;
    overwriteSave(): void;
    load(): void;
}

class newHardocreVideoGame implements PcGame {
    play(): void {
        console.log("Playing hardcore game");
    }
}

class casualGame implements PcGame, SaveAndLoad {
    play(): void {
        console.log("Playing casual game");
    }

    save(): void {
        console.log("Saving casual game");
    }

    overwriteSave(): void {
        console.log("Overwriting casual game");
    }

    load(): void {
        console.log("Loading casual game");
    }
}