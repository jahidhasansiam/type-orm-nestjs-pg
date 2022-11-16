import { Book } from 'src/book/entities/book.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn } from 'typeorm'
@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({ unique: true})
    userName: string; 

    @Column({ nullable: true })
    email? : string;

    @Column()
    age: number;

    @OneToMany(type => Book, book => book.author)
    books: Book[];
}
