/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsOptional, IsString, IsArray } from 'class-validator';

export class UpdateBookmarkDto {
    @IsOptional()
    @IsString()
    url?: string;

    @IsOptional()
    @IsString()
    title?: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsOptional()
    @IsArray()
    tags?: string[];
}