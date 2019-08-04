import { Controller, Post, Res, Body, HttpStatus, Get, NotFoundException, Param } from '@nestjs/common';

import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';

@Controller('posts')
export class PostsController {
    constructor(private postService: PostsService) {}

    // create a post route: '/posts/create'
    @Post('/create')
    async addPost(@Res() res, @Body() createPostDto: CreatePostDto) {
        const post = await this.postService.addPost(createPostDto);
        return res.status(HttpStatus.OK).json({
            message: "New Post has been created successfully",
            post
        });
    }

    // Retrieve posts list
    @Get()
    async getAllPosts(@Res() res) {
        const posts = await this.postService.getAllPosts();
        return res.status(HttpStatus.OK).json(posts);
    }

    // fetch a particular post using ID

    @Get(':postId')
    async getPost(@Res() res, @Param('postId') postId) {
        const post = await this.postService.getPost(postId);
        if(!post) {
            throw new NotFoundException('Post with id ${postId} not found!');
        }
        return res.status(HttpStatus.OK).json(post)
    }
}
