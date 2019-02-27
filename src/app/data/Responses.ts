import humps from 'humps';
import {Book, BookDetails} from './Book';

export interface BooksResponse {
  docs: Book[];
  numFound: number;
  start: number;
}

export class DetailsResponse {
  bibKey: string;
  book: BookDetails;

  constructor(data: any) {
    const { details, ...rest } = humps.camelizeKeys(data);
    Object.assign(this, {
      book: new BookDetails(details),
      ...rest,
    });
  }
}
