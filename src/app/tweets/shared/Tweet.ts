import { Builder } from "./Builder";
import { Author } from "./Author";
import { Like } from "./Like";

export class Tweet {
  author: Author;
  description: string;
  image: string;
  like: Like;
  lastAction: string;
  constructor(author: Author, description: string, image: string, like: Like, lastAction: string) { 
    this.author = author;
    this.description = description;
    this.image = image;
    this.like = like;
    this.lastAction = lastAction;
  }
}

export class TweetBuilder implements Builder<Tweet>{
  author: Author;
  description: string;
  image: string;
  like: Like;
  lastAction: string;

  setAuthor(name: string, twitter: string): TweetBuilder {
    this.author = new Author(name, twitter);
    return this;
  }

  setDescription(description: string): TweetBuilder {
    this.description = description;
    return this;
  }

  setImage(image: string): TweetBuilder {
    this.image = image;
    return this;
  } 

  setLike(likes: number, hasTweetBeenLiked: boolean): TweetBuilder {
    this.like = new Like(likes, hasTweetBeenLiked);
    return this;
  }

  setLastAction(lastAction: string): TweetBuilder {
    this.lastAction = lastAction;
    return this;
  }

  build(): Tweet {
    return new Tweet(this.author, this.description, this.image, this.like, this.lastAction);
  }
} 
