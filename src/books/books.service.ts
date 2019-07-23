import { Injectable, NotFoundException } from '@nestjs/common';

import { Book } from './book';

@Injectable()
export class BooksService {
    books: Book[] = [];

    createNewBook(title: string, author: string, price: number) {
        const newBook = new Book();
        newBook.id =  Math.random().toString();
        newBook.title = title;
        newBook.author = author;
        newBook.price = price;

        this.books.push(newBook);
        return newBook.id;
    }

    getBooks() {
        return [...this.books ]
    }

    getBook(bookId: string) {
        const book = this.books.find((book) => book.id == bookId)
        if(!book) {
            throw new NotFoundException('Could not found the book')
        }
        return {...book};
    }
}
