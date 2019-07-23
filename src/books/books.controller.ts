import { Controller, Post, Body, Get, Param } from '@nestjs/common';

import { BooksService } from './books.service';

@Controller('books')
export class BooksController {

    constructor(private readonly bookService: BooksService) {}

    @Post()
    addBook(
        @Body('title') bookTitle: string,
        @Body('author') bookAuthor: string,
        @Body('price') bookPrice: number

    ): any {
        const bookId =  this.bookService.createNewBook(bookTitle, bookAuthor, bookPrice);
        return { id: bookId}
    }

    @Get()
    getAllBooks() {
        return this.bookService.getBooks()
    }

    @Get(':id')
    getBook(@Param('id') bookId: string, ) {
        return this.bookService.getBook(bookId);
    }
}
