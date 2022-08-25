import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { response } from 'express';

@Controller('coffees')
export class CoffeesController {
    @Get()
    // findAll(){
    //     return "Returning all coffees";
    // }
    findAll(@Res() response){
        return response.status(200).send("Returning all coffees");
    }

    @Get(':id')
    // findOne(@Param() params){
    //     return `This action returns #${params.id} coffee`;
    // }
    findOne(@Param('id') id:string){
        return `This action returns #${id} coffee`;
    }

    @Post()
    @HttpCode(HttpStatus.GONE)
    create(@Body() body){
        return body;
    }
}
