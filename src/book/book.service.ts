import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { book } from './entity/book.entity';
import { Library } from './entity/Library.entity';

@Injectable()
export class BookService {
    constructor(
        @InjectRepository(book)
        private bookRepository: Repository<book>,
        @InjectRepository(Library)
        private libraryRepository: Repository<Library>
    ){}
    insertLibrary(library: Library): Promise<Library> {
        return this.libraryRepository.save(library)
    }
    insertBook(book: book): Promise<book> {
        return this.bookRepository.save(book)
    }

    findAllBooks(): Promise<book[]> {
        return this.bookRepository.find();
    }

    findAllLibrarys(): Promise<Library[]>{
        return this.libraryRepository.find()
    }
}