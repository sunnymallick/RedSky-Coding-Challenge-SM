import express, { Request, Response } from 'express';
import axios from 'axios';
import { NewUser } from './interfaces';

let userId = 0;
let usersList: NewUser[] = [];

//Grabs users from API
const getUsersFromApi = async () => {
    const response = await axios.get(`https://reqres.in/api/users`);
    usersList = [...usersList, ...response.data.data];
    for (let i = 0; i < usersList.length; i++) {
        if (userId < usersList[i].id) userId = usersList[i].id
    }
};

//Gets all users from local cache
export const getUsers = async (req: Request, res: Response) => {
    if (usersList.length === 0) await getUsersFromApi();
    return res.send({ data: usersList});
};

//Adds user to list
export const addUser = (req: Request, res: Response) => {
    const { first_name, last_name, email, avatar } = req.body;
    let newUser = {
        id: ++userId, 
        first_name,
        last_name,
        email,
        avatar
    }
    usersList.push(newUser);
    return res.send(usersList);
};

//Edit user information
export const editUserInfo = (req: Request, res: Response) => {
    const { id } = req.params
    const { first_name, last_name, email, avatar } = req.body;
    const listIndex = usersList.findIndex(user => { return user.id === +id });
    usersList[listIndex] = {
        id: usersList[listIndex].id,
        first_name,
        last_name,
        email,
        avatar
    };

    return res.send(usersList);
};

//Delete user
export const deleteUser = (req: Request, res: Response) => {
    const { id } = req.params 
    const listIndex = usersList.findIndex(user => { return user.id === +id });
    usersList.splice(listIndex, 1);
    return res.send(usersList);
};


