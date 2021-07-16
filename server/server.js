import express from 'express';
import dotenv from 'dotenv';
import router from './Routes/routes.js';
import cors from 'cors'


dotenv.config();
const app = express();
app.use(cors())
app.use(express.json());
app.use('/api/v1', router);
app.get("/", (request, response) => {
    return response.status(200).json({
        status: "success",
        data: {
            restaurant: ["mrbigss", "wendys"]
        }
    })
})

const port = process.env.PORT || 3000 ;
app.listen(port, () =>{
    console.log(`Server is listening on port ${port}`);
})