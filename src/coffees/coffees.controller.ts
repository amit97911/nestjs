import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query, Res } from '@nestjs/common';
import { response } from 'express';
import { CoffeesService } from './coffees.service';

@Controller('coffees')
export class CoffeesController {
    constructor(private readonly coffeeService:CoffeesService){

    }

    @Get()
    findAll(@Query() paginationQuery){
        // const { limit,offset } = paginationQuery;
        return this.coffeeService.findAll();
        // return `Returning all coffees. Limit: ${limit}, offset: ${offset}`;
    }
    // findAll(@Res() response){
    //     return response.status(200).send("Returning all coffees");
    // }

    @Get(':id')
    // findOne(@Param() params){
    //     return `This action returns #${params.id} coffee`;
    // }
    findOne(@Param('id') id:string){
        return this.coffeeService.findOne(id);
        // return `This action returns #${id} coffee`;
    }

    @Post()
    // @HttpCode(HttpStatus.GONE)
    create(@Body() body){
        return this.coffeeService.create(body);
        // return body;
    }

    @Patch(':id')
    update(@Param('id') id:string, @Body() body){
        return this.coffeeService.update(id,body);
        // return `This action updates #${id} coffee`;
    }

    @Delete(':id')
    remove(@Param('id') id:string){
        return this.coffeeService.remove(id);
        // return `This action removes #${id} coffee`;
    }
}
