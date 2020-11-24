import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { book } from "./book.entity";

@Entity()
export class Library{
    @PrimaryGeneratedColumn()
    LibraryId: number

    @Column()
    name: string
    
    @OneToMany(type => book, book => book.library)
    books: book[]
}