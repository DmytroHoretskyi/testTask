import express from "express";
import sequelize from "./orm/db.mjs";
import productController from "./controlers/productController.mjs";
import commentController from "./controlers/commentController.mjs";
import cors from 'cors'
const app = express();
app.use(cors());
app.use(express.json());
app.use(productController);
app.use(commentController);

const port = 5000;

async function main() {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(port, () => {console.log("server started")})
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
main();
