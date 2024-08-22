import { Request, Response } from "express"


export class TodosController {

    //*Dependencia de injeccio
    constructor(){

    }

    public getTodos = (req:Request, res:Response) => {

        res.json([
            {id: 1, text: 'Buy milk', createAt: new Date()},
            {id: 2, text: 'Buy bread', createAt: null},
            {id: 3, text: 'Buy butter', createAt: new Date()},
        ])
    }

}