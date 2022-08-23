import { AppDataSource } from "./data-source";
import app from "./app";


const initialized = async () => {
    await AppDataSource.initialize()
     app.listen(3000, () => {
         console.log('Server is running!')
     });
 }
 
initialized()
 
