import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookmarkDto } from './DTO/createBookMark.dto';
import { Bookmark } from './model/bookmark.model';
import { randomUUID } from 'crypto';
import { UpdateBookmarkDto } from './DTO/updateBookMark.dto';

@Injectable()
export class BooksService {
    private books: Bookmark[] = [];

    createBookMark(createBookmarkDto: CreateBookmarkDto): Bookmark {
        const book: Bookmark = {
            id: randomUUID(),
            url: createBookmarkDto.url,
            title: createBookmarkDto.title,
            description: createBookmarkDto.description,
            tags: createBookmarkDto.tags,
            createdAt: new Date(),
        }
        this.books.push(book);
        return book;
    }
    getAllBookMarks(): Bookmark[] {
        if (this.books.length === 0) {
            throw new NotFoundException('No bookmarks found');
        }
        return this.books;
    }

    getBookMarkById(id: string): Bookmark {
        const ind = this.books.findIndex(book => book.id === id);
        if (ind === -1) {
            throw new NotFoundException(`Bookmark with id ${id} not found`);
        }
        return this.books[ind];
    }

    updateBookMark(id: string, updateBookmarkDto: UpdateBookmarkDto): Bookmark {
        const ind = this.books.findIndex(book => book.id === id);
        if (ind === -1) {
            throw new NotFoundException(`Bookmark with id ${id} not found`);
        }
        // ?? it is nullable operator if the left side is null then it will take the right side which is same value
        this.books[ind].url = updateBookmarkDto.url ?? this.books[ind].url;
        this.books[ind].title = updateBookmarkDto.title ?? this.books[ind].title;
        this.books[ind].description = updateBookmarkDto.description ?? this.books[ind].description;
        this.books[ind].tags = updateBookmarkDto.tags ?? this.books[ind].tags;
        return this.books[ind];
    }

    deleteBookMarkById(id: string): string {
        const ind = this.books.findIndex(book => book.id === id);
        if (ind === -1) {
            throw new NotFoundException(`Bookmark with id ${id} not found`);
        }
        else {
            this.books.splice(ind, 1);
            return `Bookmark with id ${id} deleted successfully`;
        }
    }
}
