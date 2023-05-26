import {Delete, Patch, Get, Body, Controller, Post, Param, ParseUUIDPipe } from "@nestjs/common";
import { PanService } from './pan.service';
import { createPanDto } from './dto/pan.dto';


@Controller('pan')
export class PanController {
    constructor(
        private readonly PanServiceRepo: PanService){}

        @Post()
        create (@Body() PanDto: createPanDto){
            return this.PanServiceRepo.create(PanDto);
        }

        @Get()
            findAll(){
                return this.PanServiceRepo.findAll();

            
        }

        @Get (':id') 
        findOne(
            @Param('id', ParseUUIDPipe) id: string){
                return this.PanServiceRepo.findOne(id);
            }

            //eliminar un pan en especifico

            @Delete(':id' )
            remove(@Param('id', ParseUUIDPipe)id: string){
                return this.PanServiceRepo.remove(id);
            }

            

            @Patch(':id')
            update(
                @Param('id', ParseUUIDPipe) id: string,
                @Body() updatePanDto : createPanDto,

            ){
                return this.PanServiceRepo.update(id, updatePanDto);
            }
}