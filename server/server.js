import express from 'express';
import dotenv from 'dotenv';
import {router} from './Routes/routes'

dotenv.config();
const app = express();

app.use('/api/v1', router);
app.use();
app.get("/", (request, response) => {
    return response.json({
        "status": 202,
        "message": success
    })
})

const port = process.env.PORT || 3000 ;
app.listen(port, () =>{
    console.log(`Server is listening on port ${port}`);
})