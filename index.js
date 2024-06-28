import express from "express";
import statementRouter from "./routes/statement.js";
import 'dotenv/config'
import { dbConection } from "./config/db.js";


// creating the server
const app = express();

dbConection();

app.use(express.json());
// use app
app.use(statementRouter);



// creating the routes
app.get('/', (req, res) => {
    res.json('Server runnig on port 3000')
})


// listening to the server
app.listen(3000, () =>{
    console.log(`Server is running on port 3000`)

})