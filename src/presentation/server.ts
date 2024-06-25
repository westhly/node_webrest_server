import express from 'express'

export class Server {

    private app = express();


    async start(){

        //*Middleware

        //*Public Folder
        this.app.use(express.static('public'))
        
        this.app.listen(3000, () => {
            console.log(`server listening on port ${3000}`);
            
        })
        
    }
}