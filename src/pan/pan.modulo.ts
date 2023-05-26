import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Pan } from "./entities/pan.entity";
import { PanController } from "./pan.controller";
import { PanService } from "./pan.service";

@Module({
    imports: [TypeOrmModule.forFeature([Pan])],
    controllers: [PanController],
    providers: [PanService],
})

export class PanModule {}