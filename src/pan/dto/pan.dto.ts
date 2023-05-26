import {Optional} from "@nestjs/common";
import { IsNumber, IsString, IsNotEmpty, MinLength, IsArray, IsOptional } from "class-validator";

export class createPanDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    lugar: string;

    @IsNumber()
    @IsNotEmpty()
    price: number;

    @IsOptional()
    @IsString()
    panname: string;

    @IsString()
    @Optional()
    @MinLength(15)
    description: string;

    @IsString()
    @Optional()
    tipo: string;

    @IsString()
    @Optional()
    sabor: string;

    @IsNumber()
    @Optional()
    adomicilio: number;

    @IsString({ each: true})
    @IsArray()
    @IsOptional()
    images?: string[];

}