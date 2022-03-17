import express, { Application, Request, Response } from 'express';
import * as controller from './controller'

const app: Application = express();
const port: number = 5001;

app.use(express.json())


app.get('/users', controller.getUsers)
app.post('/addUser', controller.addUser)
app.put('/updateUserInfo/:id', controller.updateUserInfo)
app.delete('/deleteUser/:id', controller.deleteUser)

app.listen(port, () => {
    console.log(`Listening on port ${port}!`);
});