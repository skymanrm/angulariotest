import {Book} from './Book';

export interface BooksResponse {
  docs: Book[];
  numFound: number;
  start: number;
}
