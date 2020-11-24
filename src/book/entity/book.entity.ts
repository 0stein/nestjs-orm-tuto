import { type } from "os";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Library } from "./Library.entity";



@Entity()
export class book {
    @PrimaryGeneratedColumn()
    bookId: number

    @Column()
    title: string

    @Column()
    author: string

    @Column()
    code: string

    @ManyToOne(()=> Library, library => library.books, {
        cascade: true
    })
    library: Library
}