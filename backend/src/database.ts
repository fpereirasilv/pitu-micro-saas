import {Sequelize} from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(`mysql://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@mysql.doisdasorte.kinghost.net:3306/${process.env.DATABASE_NAME}`);

export default sequelize;
