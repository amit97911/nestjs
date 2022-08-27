import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query, Res } from '@nestjs/common';
import { response } from 'express';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

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
    }

    @Post()
    // @HttpCode(HttpStatus.GONE)
    create(@Body() createCoffeeDto: CreateCoffeeDto){
        return this.coffeeService.create(createCoffeeDto);
    }

    @Patch(':id')
    update(@Param('id') id:string, @Body() updateCoffeeDto: UpdateCoffeeDto){
        return this.coffeeService.update(id,updateCoffeeDto);
    }

    @Delete(':id')
    remove(@Param('id') id:string){
        return this.coffeeService.remove(id);
    }
}
