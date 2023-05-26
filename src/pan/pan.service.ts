import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Pan } from './entities/pan.entity';
import { Repository } from "typeorm";
import { createPanDto } from './dto/pan.dto';

@Injectable()
export class PanService {
    constructor(
        @InjectRepository(Pan)
        private readonly panRepository: Repository<Pan>,
    ){}
    //Metodo para crear un pan para la panaderia
    async create(PanDto: createPanDto) {
        const pans = this.panRepository.create(PanDto);
        await this.panRepository.save(pans);

        return pans;
    }
    //metodo para visualizar

    findAll(){
        return this.panRepository.find();
    }

    findOne(id: string) {
        return this.panRepository.findOneBy({id})
    }

    async remove(id: string){
        const Pan = await this.findOne( id );
        await this.panRepository.remove(Pan);
        return 'eliminado satisfactoriamente el pan';

    }

    //crear metodo patch, para actualizar

    async update(id: string, cambios: createPanDto) {
        const finPan = await this.findOne(id);
        const updatedPan = await this.panRepository.merge(finPan, cambios);
        return this.panRepository.update(id, updatedPan);
    }

}