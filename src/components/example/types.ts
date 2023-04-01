import { IPost } from "../post/types";

export interface IUser {
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    posts: IPost[];
}