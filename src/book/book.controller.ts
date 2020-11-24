import { Body, Controller, Get, Post } from '@nestjs/common';
import { BookService } from './book.service';
import { book } from './entity/book.entity';
import { Library } from './entity/Library.entity';

@Controller('book')
export class BookController {
    constructor(private service: BookService){}

    @Post()
    addBook(@Body() book: book): Promise<book> {
        return this.service.insertBook(book);
    }

    @Post('/lib')
    addLibrary(@Body() library: Library): Promise<Library> {
        return this.service.insertLibrary(library)
    }

    @Get()
    findAllBook(): Promise<book[]> {
        return this.service.findAllBooks();
    }

    @Get('/lib')
    getLibrary(): Promise<Library[]> {
        return this.service.findAllLibrarys();
    }
}
