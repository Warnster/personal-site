import {IPost} from './types';

export const Post = ({ post }: { post: IPost }) => {
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    )
}