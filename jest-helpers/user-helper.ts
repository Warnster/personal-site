import { IUser } from "@/components/example/types";
import { IPost } from "@/components/post/types";

export const createUserMock = (userMockData?: Partial<IUser>): IUser => {
    const user: IUser = {
        firstName: "John",
        lastName: "Doe",
        dateOfBirth: new Date("1990-01-01"),
        posts: [],
        ...userMockData
      };
    return user;
}

export const createPostMock = (postMockData?: Partial<IPost>): IPost => {
    return {
        title: "My first post",
        content: "This is my first post",
        date: new Date("2020-01-01"),
        ...postMockData
    }
}