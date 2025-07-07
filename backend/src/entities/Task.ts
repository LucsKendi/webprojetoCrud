import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { ClasseMod2 } from "./ClasseMod2";

@Entity('atividades')
export class ClasseMod1 {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    titulo!: string;

    @Column({ type: 'text',nullable: true })
    detalhes!: string | null;
    
    @ManyToOne(() => ClasseMod2, user => user.tasks, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'usuario_dono' })
    user!: ClasseMod2;

    @Column({ name: 'usuario_dono' })
    ownerUsername!: string;
}