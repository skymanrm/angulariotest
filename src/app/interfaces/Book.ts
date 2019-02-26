export interface Book {
  subject: string[];
  cover_i: string;
  first_publish_year: string;
  title: string;
  author_name: string[];
  lccn: string[];
  isbn: string[];
}

export interface Author {
  name: string;
  key: string;
}

export interface BookDetails {
  title: string;
  covers: string[];
  subtitle: string;
  number_of_pages: number;
  authors: Author[];
  publish_date: string;
  publishers: string[];
  weight: string;
}
