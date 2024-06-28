import { Router } from "express";
// import { StatementModel } from "../models/statement_model.js";
import { addStatement, deleteById, getById, getStatement, update } from "../controllers/statement_controller.js";

const statementRouter = Router();

statementRouter.post("/statement", addStatement);

// get all statements
statementRouter.get("/statement", getStatement);

// get by id
statementRouter.get('/statement/:id', getById);

// update the caseStatus by the id
statementRouter.patch('/statement/:id', update);

// delete the statement by id
statementRouter.delete('/statement/:id', deleteById);


export default statementRouter;