import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Post } from './interfaces/post.interface';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostsService {
    constructor(@InjectModel('Post') private readonly postModel: Model<Post>) {}

    // fetch all posts
    async getAllPosts(): Promise<Post[]> {
        const posts = await this.postModel.find().exec();
        return posts;
    }

    // get a single post
    async getPost(postId): Promise<Post> {
        const post = await this.postModel.findById(postId).exec();
        return post;
    }

    // create a post
    async addPost(createPostDto: CreatePostDto): Promise<Post> {
        const newPost = await new this.postModel(createPostDto);
        return newPost.save();
    }

    // Edit a post
    async updatePost(postId, createPostDto: CreatePostDto): Promise<Post> {
        const updatePost = await this.postModel.findByIdAndUpdate(postId, createPostDto, {new: true});
        return updatePost;
    }

    // delete a post
    async deletePost(postId): Promise<any> {
        const deletedPost = await this.postModel.findOneAndDelete(postId);
        return deletedPost;
    }
}
