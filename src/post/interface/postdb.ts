import { CreatePostRequest } from "../dto/create-post.dto";
import { Post } from "./post";

export interface IPostDb {
    create(createPostRequest: CreatePostRequest): Promise<Post>
}