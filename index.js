import express from 'express';

const app = express();
const port = process.env.port || 3000;

app.use('/',(req,res)=>{
    res.status(200).send('Hello!');
});

app.listen(port, () =>{
    console.log(`Server is listening on port ${port}`);
})