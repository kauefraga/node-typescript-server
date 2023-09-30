import { describe, it, expect } from 'vitest';
import { Book } from '@core/entities/Book';

describe('Book entity', () => {
  it('should be able to create a book', () => {
    const book = new Book({
      title: 'Test Book',
    });

    expect(book).toBeInstanceOf(Book);
  });

  it('should return book properties properly', () => {
    const book = new Book({
      title: 'Test Book',
    });

    expect(book.title).toEqual('Test Book');
    expect(book.registeredAt).toBeInstanceOf(Date);
  });

  it('should be able to update a book', () => {
    const book = new Book({
      title: 'Test Book',
    });

    book.title = 'New Test Book';

    expect(book.title).toEqual('New Test Book');
  });
});
