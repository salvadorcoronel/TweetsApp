export class Like {
    private _likes: number;
    private _hasTweetBeenLiked: boolean;

    constructor(likes: number, hasTweetBeenLiked: boolean) {
        this._likes = likes;
        this._hasTweetBeenLiked = hasTweetBeenLiked;
    }

    get likes(): number {
        return this._likes;
    }

    get hasTweetBeenLiked(): boolean {
        return this._hasTweetBeenLiked;
    }

    set likes(likes: number) {
        this._likes = likes;
    }

    set hasTweetBeenLiked(hasTweetBeenLiked: boolean){
        this._hasTweetBeenLiked = hasTweetBeenLiked;
    } 

}