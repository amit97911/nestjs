import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('coffee') //by default the TypeORM will use the table name as the class name in small case.
export class Coffee {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    brand: string;

    @Column('json', { nullable: true })
    flavors: string[];
}