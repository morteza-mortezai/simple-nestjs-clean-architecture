import { IPostDb } from "../interface/postdb";
import { CreatePostRequest } from '../dto/create-post.dto'
import Post from '../domain/post.entity'

export default class createPost {
    private readonly postRepository: IPostDb

    constructor(
        postDb: IPostDb
    ) {
        this.postRepository = postDb
    }

    async create(createPost: CreatePostRequest) {
        const newPost = new Post().create(createPost.title, createPost.body)
        await this.postRepository.create(newPost)
    }

}