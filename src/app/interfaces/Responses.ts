import humps from 'humps';
import {Book, BookDetails} from './Book';

export interface BooksResponse {
  docs: Book[];
  numFound: number;
  start: number;
}

export class DetailsResponse {
  bib_key: string;
  details: BookDetails;

  constructor(data: any) {
    Object.assign(this, humps.camelizeKeys(data));
  }
}
