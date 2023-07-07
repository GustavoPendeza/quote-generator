type Data = {
  pagination: Pagination;
  totalQuotes: number;
  data: Quote[];
}

type Pagination = {
  totalPages: number;
}

type Quote = {
  _id: string;
  quoteText: string;
  quoteAuthor: string;
  quoteGenre: string;
}