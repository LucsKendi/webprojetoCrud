import { DataSource } from "typeorm";
import "reflect-metadata";
import { ClasseMod2 } from "../entities/ClasseMod2";
import { ClasseMod1 } from "../entities/ClasseMod1";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "fatec",
    database: "crud_ts_db",
    synchronize: false,
    logging: false,
    entities: [ClasseMod2, ClasseMod1],
    migrations: [],
    subscribers: [],
});