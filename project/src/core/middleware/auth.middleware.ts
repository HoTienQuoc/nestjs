import { Injectable, NestMiddleware, UnauthorizedException } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { RequestModel } from "../interfaces/user";

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    constructor() {}
    use(req: RequestModel, res: Response, next: NextFunction) {
        
        const { authorization } = req.headers;
        if (!authorization) {
        throw new UnauthorizedException("API token is required");
        }
        // const {role,email,permissions} = this.authService.authenticateUser(authorization);
        req.user = {
            role:["admin"],email:"admin@gmail.com",permissions:["editor"]
        };
        next();
    }
}