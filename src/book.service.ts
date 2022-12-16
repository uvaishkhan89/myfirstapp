import { Injectable } from "@nestjs/common/decorators";

@Injectable()
export class BookService{

    //add
    addBook(): string {
        return 'This will add book';
    }

    //delete
    deleteBook(): string {
        return 'This is for deleting book';
    }

    //update book
    updateBook(): string {
        return 'This will update book';
    }

    //find All book
    findAllBook(): string {
        return 'This will find all books';
    }

}