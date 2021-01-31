import { Request, Response } from 'express';
import createUser from './services/CreateUser' ;


export function helloWorld(request: Request,response: Response){
    const user = createUser({
        email:'jviniciusxavier26',
        password:'12435',
        techs: ['Node','React', 'React Native'],

});
    console.log(user.email);
    return response.json({message: 'Hello World'});
}