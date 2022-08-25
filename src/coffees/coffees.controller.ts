import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query, Res } from '@nestjs/common';
import { response } from 'express';

@Controller('coffees')
export class CoffeesController {
    @Get()
    findAll(@Query() paginationQuery){
        const { limit,offset } = paginationQuery;
        return `Returning all coffees. Limit: ${limit}, offset: ${offset}`;
    }
    // findAll(@Res() response){
    //     return response.status(200).send("Returning all coffees");
    // }

    @Get(':id')
    // findOne(@Param() params){
    //     return `This action returns #${params.id} coffee`;
    // }
    findOne(@Param('id') id:string){
        return `This action returns #${id} coffee`;
    }

    @Post()
    // @HttpCode(HttpStatus.GONE)
    create(@Body() body){
        return body;
    }

    @Patch(':id')
    update(@Param('id') id:string, @Body() body){
        return `This action updates #${id} coffee`;
    }

    @Delete(':id')
    remove(@Param('id') id:string){
        return `This action removes #${id} coffee`;
    }
}
