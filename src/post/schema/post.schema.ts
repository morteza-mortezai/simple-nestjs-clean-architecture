import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PostDocument = HydratedDocument<Post>;

@Schema()
export class Post {
    @Prop({ unique: true, index: true, required: true })
    title: number;

    @Prop({ required: true })
    body: string;

}

export const PostSchema = SchemaFactory.createForClass(Post);