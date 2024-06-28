import { StatementModel } from "../models/statement_model.js";

// function to store data in the database
export const addStatement = async (req, res) =>{
    try {
    console.log('request', req.body);
    const addData = await StatementModel.create(req.body);
    res.status(200).send(addData)


    } catch (error) {
        console.log(error);

    }
}

// function to get data
export const getStatement = async (req, res) => {
    try {
        console.log ('request', req.body);
        const getData = await StatementModel.find()
        {
            res.status(200).send(getData)
        }
        
    } catch (error) {
        console.log (error)
    }
}

// function to get data by Id
export const getById = async (req, res) => {
    try {
       console.log('request', req.body) ;
       const ById = await StatementModel.findById(req.params.id)
       {
        res.status(200).send(ById)
       }
    } catch (error) {
        console.log(error)
    }
}

// function to update caseStatus by id
export const update = async (req, res, next) => {
    try {
        const status = req.body.caseStatus
        const updateStatus = await StatementModel.findByIdAndUpdate(req.params.id, {caseStatus: status});
        res.json(updateStatus);
    } catch (error) {
        next(error)
    }
}

// find by id and delete
export const deleteById = async (req, res, next) => {
    try {  
        const deleteSomething = req.body                                                
        const deletedStatement = await StatementModel.findByIdAndDelete(req.params.id, {_id: deleteSomething});
        res.json(deletedStatement)

    } catch (error) {
        next(error)
    }
}