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
  publishDate: string;
  publishers: string[];
  weight: string;

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
}

export class BookLocal {
  key: string;
  tags: Tag[] = [];
  title: string;

  constructor(data: any) {
    Object.assign(this, data);
  }
}
