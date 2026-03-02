import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { Bookmark } from './model/bookmark.model';
import { BooksService } from './books.service';
import { CreateBookmarkDto } from './DTO/createBookMark.dto';
import { UpdateBookmarkDto } from './DTO/updateBookMark.dto';
@Controller('books')
export class BooksController {
    constructor(private booksService: BooksService) { }
    @Get()
    getAllBookMarks(): Bookmark[] {
        return this.booksService.getAllBookMarks();
    }

    @Get(':id')
    getBookMarkById(@Param('id') id: string): Bookmark | undefined {
        return this.booksService.getBookMarkById(id);
    }

    @Post()
    createBookMark(@Body() createBookmarkDto: CreateBookmarkDto): Bookmark | undefined {
        return this.booksService.createBookMark(createBookmarkDto);
    }

    @Patch(':id')
    updateBookMark(@Param('id') id: string, @Body() updateBookmarkDto: UpdateBookmarkDto): Bookmark | undefined {
        return this.booksService.updateBookMark(id, updateBookmarkDto);
    }

    @Delete(':id')
    deleteBookMarkById(@Param('id') id: string): string {
        return this.booksService.deleteBookMarkById(id);
    }
}
