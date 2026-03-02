/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsNotEmpty, IsString } from "class-validator";

export class CreateBookmarkDto {
    @IsString()
    @IsNotEmpty()
    url: string;
    @IsString()
    @IsNotEmpty()
    title: string;
    description: string;
    tags?: string[];
}