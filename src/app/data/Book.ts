import humps from 'humps';
import {Tag} from './Tag';

export class Book {
  subject: string[];
  coverI: string;
  firstPublishYear: string;
  title: string;
  authorName: string[];
  lccn: string[];
  isbn: string[];
  key: string;
  editionKey?: string[];

  constructor(data: any) {
    Object.assign(this, humps.camelizeKeys(data));
  }

  olid(): string {
    if (!this.editionKey || this.editionKey.length === 0) {
      return null;
    }
    return this.editionKey[this.editionKey.length - 1];
  }

  cover(): string {
    if (this.coverI && this.coverI !== '-1') {
      return `https://covers.openlibrary.org/w/id/${this.coverI}-M.jpg`;
    }
    return 'https://via.placeholder.com/100';
  }
}

export interface Author {
  name: string;
  key: string;
}

export class BookDetails {
  title: string;
  covers: string[];
  subtitle: string;
  numberOfPages: number;
  authors: Author[];
  publishers: string[];
  weight: string;
  publishDate: string;
  isbn10: string[];
  isbn13: string[];

  constructor(data: any) {
    Object.assign(this, humps.camelizeKeys(data));
  }

  cover(): string {
    if (Array.isArray(this.covers)) {
      const id = this.covers[0];
      return `https://covers.openlibrary.org/w/id/${id}-L.jpg`;
    }
    return 'https://via.placeholder.com/300x400';
  }

  isbn(): string {
    let isbn: string;
    if (Array.isArray(this.isbn10) && this.isbn10.length > 0) {
      isbn = this.isbn10[0];
    } else if (Array.isArray(this.isbn13) && this.isbn13.length > 0) {
      isbn = this.isbn13[0];
    }
    return isbn;
  }

  amazonLink(): string {
    return `https://www.amazon.com/gp/product/${this.isbn()}`;
  }

  googleLink(): string {
    return `http://books.google.com/books?vid=ISBN${this.isbn()}`;
  }
}

export class BookLocal {
  key: string;
  tags: string[] = [];
  title: string;

  constructor(data: any) {
    Object.assign(this, data);
  }
}
