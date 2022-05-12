import Sequelize from 'sequelize';

const sequelize = new Sequelize('MyLittleShop', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false,
},
);

export default sequelize;
