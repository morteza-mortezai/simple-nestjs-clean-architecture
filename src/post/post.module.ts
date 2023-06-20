import { Module } from '@nestjs/common';
import createPost from './use-case/create-post';
import { postRepository } from './service/post.service';
import { PostSchema, PostDocument, Post } from './schema/post.schema'

const createPostu = new createPost(new postRepository(PostSchema as any))

@Module({
    imports: [],
    controllers: [],
    providers: [],
})
export class PostModule { }
