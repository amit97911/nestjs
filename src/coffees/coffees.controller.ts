import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
    @Get()
    findAll(){
        return "Returning all coffees";
    }

    @Get(':id')
    // findOne(@Param() params){
    //     return `This action returns #${params.id} coffee`;
    // }
    findOne(@Param('id') id:string){
        return `This action returns #${id} coffee`;
    }

    @Post()
    create(@Body() body){
        return body;
    }
}