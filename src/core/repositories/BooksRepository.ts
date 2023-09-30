import { Book } from '@core/entities/Book';

export interface BooksRepository {
  register(book: Book): Promise<void>;
  findAll(): Promise<Book[]>;
  findById(bookId: string): Promise<Book>;
  findByTitle(bookTitle: string): Promise<Book>;
  updateByTitle(
    bookTitle: string,
    newBook: Book,
  ): Promise<void>;
  deleteByTitle(bookTitle: string): Promise<void>;
}
