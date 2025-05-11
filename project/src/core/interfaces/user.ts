import { Request } from "express";
export interface UserMetadata {
    role: string[];
    email: string;
    permissions: string[];
}

export interface RequestModel extends Request {
    user: UserMetadata;
}