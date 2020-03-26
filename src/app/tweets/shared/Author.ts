export class Author {
    private _name: string;
    private _twitter: string;

    constructor(name: string, twitter: string) {
        this._name = name;
        this._twitter = twitter;
    }

    get name(): string {
        return this._name;
    }

    get twitter(): string {
        return this._twitter;
    }

    set name(name: string) {
        this._name = name;
    }

    set twitter(twitter: string) {
        this._twitter = twitter;
    }
}