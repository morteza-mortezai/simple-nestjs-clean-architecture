import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post, PostDocument } from '../schema/post.schema';
require('dotenv').config()
import { CreatePostRequest } from '../dto/create-post.dto'


@Injectable()
export class postRepository {
    constructor(
        @InjectModel(Post.name) private readonly postModel: Model<PostDocument>,
    ) { }
    // create avatar entry in db
    async create(createPostRequest: CreatePostRequest): Promise<any> {
        return this.postModel.create(createPostRequest);
    }
}
